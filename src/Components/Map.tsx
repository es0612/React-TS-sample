import { Icon, LatLngExpression } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


const Map: React.FC = () => {
  const position: LatLngExpression = [51.505, -0.09]

  Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={styles.Map}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

const styles = {
  Map: {
    minHeight: '100vh',
  },
}

export default Map
