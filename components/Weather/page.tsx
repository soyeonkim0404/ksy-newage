'use client';
import { useEffect, useState } from 'react';

export default function Weather() {
  const [weatherToday, setWeatherToday] = useState(null);
  useEffect(() => {
    async function fetchWeatherData() {
      {
        /*base_date, base_time 구하기*/
      }
      let public_time = new Date();
      let current_time = new Date();
      let diffTime = 0;
      let month = '';
      // 가장 최근의 base_date, base_time 구하기
      public_time.setHours(public_time.getHours() - 2);
      public_time.setMinutes(public_time.getMinutes() - 10);
      month = `${public_time.getMonth() + 1}`.padStart(2, '0');
      public_time.setHours(
        parseInt(String(public_time.getHours() / 3)) * 3 + 2
      );
      public_time.setMinutes(10);

      const BASE_URL =
        'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst';
      const SERVICEKEY = process.env.NEXT_PUBLIC_APISERIAL;
      let pageNo = 1;
      let dataType = 'json';
      let base_date = `${public_time.getFullYear()}${month}${public_time.getDate()}`; // 오늘 날짜
      let base_time = (public_time.getHours() * 100)
        .toString()
        .padStart(4, '0'); // 실시간 시간이 아니라 가장 가까운 예보 시각의 데이터를 불러
      let nx = '55'; // 현재 나의 위치 : X좌표
      let ny = '127'; // 현재 나의 위치 :  Y좌표

      //발표 시각과 현재 시간과의 차이를 구해 pageNo 찾기
      diffTime = (current_time.getTime() - public_time.getTime()) / 60000;
      if (diffTime < 50)
        pageNo = 1; //2310~2359
      else if (diffTime < 110)
        pageNo = 2; //00~0:59
      else if (diffTime < 170)
        pageNo = 3; //1:00~1:59
      else pageNo = 4;

      const API_URL = `${BASE_URL}?serviceKey=${SERVICEKEY}&pageNo=${pageNo}&&numOfRows=1000&dataType=${dataType}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`;

      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        console.log('json', json);

        const items = json.response.body.items.item; // 올바른 데이터 경로

        if (items?.length > 0) {
          setWeatherToday(items);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }

    fetchWeatherData();
  }, []);

  console.log(weatherToday);

  return <div></div>;
}
