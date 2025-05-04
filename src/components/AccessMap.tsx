import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

export const AccessMap = () => {
  // 通常は環境変数から取得しますが、デモ用に直接記述
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBxxxxxxxxxxxxxxxxxxxxx", // 実際の使用時は有効なAPIキーに置き換えてください
  });

  const center = useMemo(() => ({ lat: 35.6896, lng: 139.7006 }), []);

  const businessHours = [
    { day: '月曜日', hours: '休業日' },
    { day: '火曜日', hours: '11:30 - 14:30, 17:30 - 22:00' },
    { day: '水曜日', hours: '11:30 - 14:30, 17:30 - 22:00' },
    { day: '木曜日', hours: '11:30 - 14:30, 17:30 - 22:00' },
    { day: '金曜日', hours: '11:30 - 14:30, 17:30 - 22:30' },
    { day: '土曜日', hours: '11:30 - 22:30' },
    { day: '日曜日', hours: '11:30 - 21:00' },
  ];

  return (
    <div className="lg:flex lg:space-x-8">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <div className="h-[450px] bg-gray-100 rounded-lg overflow-hidden">
          {!isLoaded ? (
            <div className="w-full h-full flex items-center justify-center">
              <p>地図を読み込み中...</p>
            </div>
          ) : (
            <GoogleMap
              zoom={16}
              center={center}
              mapContainerClassName="w-full h-full"
              options={{
                zoomControl: true,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
            >
              <MarkerF position={center} />
            </GoogleMap>
          )}
        </div>
      </div>

      <div className="lg:w-1/2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">営業情報</h3>

          <div className="mb-6">
            <h4 className="font-medium mb-2">住所</h4>
            <p>〒160-0022 東京都新宿区新宿3丁目XX-XX</p>
            <p className="mt-1">JR新宿駅東口より徒歩5分</p>
          </div>

          <div className="mb-6">
            <h4 className="font-medium mb-2">お問い合わせ</h4>
            <p>TEL: 03-XXXX-XXXX</p>
            <p>Email: info@aldente.example.com</p>
          </div>

          <div>
            <h4 className="font-medium mb-2">営業時間</h4>
            <ul className="space-y-1">
              {businessHours.map((item) => (
                <li
                  key={item.day}
                  className={`flex justify-between ${item.hours === '休業日' ? 'text-red-500 font-medium' : ''}`}
                >
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
