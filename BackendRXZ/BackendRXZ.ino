
/**
 * Created by K. Suwatchai (Mobizt)
 *
 * Email: suwatchai@outlook.com
 *
 * Github: https://github.com/mobizt
 *
 * Copyright (c) 2023 mobizt
 *
 */

// This example shows how to update the spreadsheet's values.

#include <Arduino.h>
#include <WiFi.h>
#include <ESP_Google_Sheet_Client.h>

#define WIFI_SSID "Afiq@unifi_2.4GHz"
#define WIFI_PASSWORD "afiq1957@"

// For how to create Service Account and how to use the library, go to https://github.com/mobizt/ESP-Google-Sheet-Client
#define PROJECT_ID "my-project-1555843930293"
#define SHEET_ID "1I-mmti-OOWER0yB1_cRZVJR2Qkb8P2GFhp7gr0rDBFk"
#define UPDATE_RANGE "Sheet1!B2:H2"

// Service Account's client email
#define CLIENT_EMAIL "meterrxz-nodered@my-project-1555843930293.iam.gserviceaccount.com"

// Service Account's private key
const char PRIVATE_KEY[] PROGMEM = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC8eSc07tQAazaj\n8kRfSFneU9g5IkS2w7PGzl8Kz78OR48eYO+eWNDMFBJGS7GK7+ln5QA8aBtBluLq\nePvEuUbhh+lGZKImkKd7dENLaJdO3hSUR5EmVM7nc2u3USWCcMCpXC/+N6uFxIKM\nO8Wh4m7rl/CDxchMctkqEQRKP61gBVsRxkrBxzYUE3ApbNq9qm1VBikXEU6XWpE2\noR/xoDitnDfysKKb90zqY3h/lHOnwqfx0SlBOvyqWXXnJbZkfGBo/rv/87mwSvHc\nm+GA++Q4tRzCc8es9WCkg/mzbMZyYX19owmubwkMbZYEobymiMf6aiFjhtGvB2J9\nZJqVE7DtAgMBAAECggEAI1K2iyhmsdRmN3hYoZ36/9zpdZ3LUJChoTU84VcZuOim\n9VvYFO6S5Wiumx+lHQPFVCw6bNfbIeIQUb8Oeqp50xuImCGUtVMfnJbn5Nprn0Om\nijrWhJ9Y7s52RfNuqwGMTkGBmizfV/ECQZuTOPmp7bw6fsvi9BcDRevOCMdh7FCK\nT1DHU/xwgDfDwn2UMbkUYPZpDxjA0JAYmwPevkl5RMcGfyr9U9z0hbM2fBqPZh6r\nQ5WZRBK5Yn/uMjkEroqlnz62v2JM7MY0vMpk+ybuimOsfLYGHYsureQftCdpKD4u\nauCVfyvQHC678GmEgzHQUh56w8GexUC9CEEahhWtaQKBgQDeHblfDzrdmbMX3vnT\nIggK1uuSpdxsdYehpKkay/JKiSlT4/wKaW4JEFZs3y8SzXQhL8hdMY3XG+qGmeiF\n/4IsiztAtk6NM617SwVX6rWolM7hS6Hw6rTXlBNEyJ6chc9EN5AjdbzwHOOv7zVx\n8k20D89QJsYNgnKQdXLT20P9mQKBgQDZOZQNtjCmhL1lQSw1iwxxjNv+JdhPJWUi\nqaFnoPJBUYpBJoXwc6Q2E7dunDNYsx82M99QUo8ugOJwOTCE2eU8s05hL5oRn/H2\nakGILInMq2HoUQGk6cXvzJ5WvFsjrxGxBtv6ODBj6m4rvELFOyrDYief7MShyX9E\n0d8jNEFadQKBgQCOBDVVCVja/X4cIi5cB6NawuYmgrQ4CMGq4axZ/NKzQ5XQFLI/\nOf/n/bE0tVLU09aPrYyPwbJuOmQuodOhcagasP82thntgIBIl8QX3XM/Eb5hIMmv\nT3JHcF8NmLSJYakPdfNMKOigIeiWwfzLGWEDYyRrnA7/7kswAFhmCwki6QKBgETD\nb1Sv2dK8rl/BM8d3TucbGgDn5gOX6N4CKK/vSQDYWRWqpjepw8/Cigyfsblgan70\nCLsah2zHK+cuk2daurBual9lfDYcFbJVjI0Y3D5H+mRaUFTuE9SHR5BZa9ht8QHD\nFBuvcdIPQfTiUZix1CWpirWbc9trN7iHX0V7ozyJAoGAY8MTrdJdBtwXhbOQk2zT\nu5bDyCNbJL7jpzrlb9Hx63bFRnSdKeo9w4DALL3NXljzD5YqpdvYfSv4NrAW4eKz\nmjKuDLoL9xpfpBvfXhHHQESTW8O3VCZXAyzinDMzvu8oQGkTGrE5V40CAqmBZZvn\nmfA/z1MHd67SUXQvNOryGbU=\n-----END PRIVATE KEY-----\n";

void tokenStatusCallback(TokenInfo info);

void setup() {
    Serial.begin(115200);
    Serial.println();
    Serial.println();

    GSheet.printf("ESP Google Sheet Client v%s\n\n", ESP_GOOGLE_SHEET_CLIENT_VERSION);

    WiFi.setAutoReconnect(true);
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

    Serial.print("Connecting to Wi-Fi");
    unsigned long ms = millis();
    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        delay(300);
    }
    Serial.println();
    Serial.print("Connected with IP: ");
    Serial.println(WiFi.localIP());
    Serial.println();

    // Set the callback for Google API access token generation status (for debug only)
    GSheet.setTokenCallback(tokenStatusCallback);

    // Set the seconds to refresh the auth token before expire (60 to 3540, default is 300 seconds)
    GSheet.setPrerefreshSeconds(10 * 60);

    // Begin the access token generation for Google API authentication
    GSheet.begin(CLIENT_EMAIL, PROJECT_ID, PRIVATE_KEY);
}

void loop() {
    bool ready = GSheet.ready();

    if (ready) {
        Serial.println("\nUpdate spreadsheet values...");
        Serial.println("----------------------------------------------------------------");

        FirebaseJson response;
        FirebaseJson valueRange;

        // Update row
        valueRange.add("range", UPDATE_RANGE);
        valueRange.add("majorDimension", "ROWS");
        valueRange.set("values/[2]/[0]", "ON");     // High Beam
        valueRange.set("values/[2]/[1]", "OFF");    // Neutral
        valueRange.set("values/[2]/[2]", "ON");     // 2T
        valueRange.set("values/[2]/[3]", "OFF");    // Left Signal
        valueRange.set("values/[2]/[4]", "ON");     // Right Signal
        valueRange.set("values/[2]/[5]", "0");      // Odo
        valueRange.set("values/[2]/[6]", "0");      // rpm
        GSheet.values.update(&response, SHEET_ID, UPDATE_RANGE , &valueRange);

        response.toString(Serial, true);
        Serial.println();
        delay(1000);
    }
}

void tokenStatusCallback(TokenInfo info) {
    if (info.status == token_status_error) {
        GSheet.printf("Token info: type = %s, status = %s\n", GSheet.getTokenType(info).c_str(), GSheet.getTokenStatus(info).c_str());
        GSheet.printf("Token error: %s\n", GSheet.getTokenError(info).c_str());
    } else {
        GSheet.printf("Token info: type = %s, status = %s\n", GSheet.getTokenType(info).c_str(), GSheet.getTokenStatus(info).c_str());
    }
}