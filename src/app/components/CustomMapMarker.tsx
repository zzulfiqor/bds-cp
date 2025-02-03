import { useMap } from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
import { useEffect } from 'react';

interface CustomMarkerProps {
  position: LatLngTuple; // Koordinat marker
  popupText?: string;    // Teks popup opsional
  link: string;          // URL untuk dibuka saat marker diklik
}

// Custom Icon
const customIcon = L.icon({
  iconUrl: '/logo-only.png',  // Path relatif dari folder `public`
  iconSize: [50, 18],     // Ukuran ikon
  iconAnchor: [25, 50],   // Anchor di tengah bawah
  popupAnchor: [0, -50],  // Anchor popup di atas ikon
});

const CustomMarker: React.FC<CustomMarkerProps> = ({ position, popupText, link }) => {
  const map = useMap();

  useEffect(() => {
    const marker = L.marker(position, { icon: customIcon }).addTo(map);

    const popup = L.popup({
      autoClose: false,
      closeOnClick: false,
    })
      .setLatLng(position)
      .setContent(popupText || '');

    marker.bindPopup(popup).openPopup(); // Membuka popup secara otomatis

    marker.on('click', () => {
      window.open(link, '_blank'); // Membuka URL di tab baru saat marker diklik
    });

    return () => {
      map.removeLayer(marker); // Hapus marker saat komponen di-unmount
    };
  }, [map, position, popupText, link]);

  return null; // Marker di-render langsung oleh Leaflet, jadi tidak perlu komponen JSX
};

export default CustomMarker;
