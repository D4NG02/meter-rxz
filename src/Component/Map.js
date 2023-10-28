import React from 'react'

export default function Map({ lat, lon }) {

    return (
      <div>
        <iframe src="https://embed.waze.com/iframe?zoom=16&lat=3.067498&lon=101.499947&pin=1&desc=1&act=livemap" width="600" height="450" allowfullscreen></iframe>
      </div>
    )
}
