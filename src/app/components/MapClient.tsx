import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import CustomMarker from './CustomMapMarker';

const MapClient: React.FC = () => {
  const position: LatLngExpression = [-8.0553465, 114.4301391]; // Koordinat BDS
  const mapLink = 'https://www.google.com/maps/place/Banyuwangi+Dive+School/@-8.0553465,114.4301391,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd13f001b61576b:0xeb557bcf1efad7c0!8m2!3d-8.0553465!4d114.4301391!16s%2Fg%2F11lmkc1g7y?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D'; // URL untuk marker

  return (
    <MapContainer
      center={position}
      zoom={12}
      style={{ height: '200px', width: '100%', zIndex: 0 }}
      
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <CustomMarker position={position} popupText="Banyuwangi Diving School" link={mapLink} />
    </MapContainer>
  );
};

export default MapClient;
