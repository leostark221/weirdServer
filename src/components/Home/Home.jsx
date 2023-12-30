import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import Images from "../../services/images";
import { onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCWRyfatEZhfw7VpnwwAyzjGowT8wXL4V4",
  authDomain: "testnode-e6881.firebaseapp.com",
  databaseURL: "https://testnode-e6881-default-rtdb.firebaseio.com",
  projectId: "testnode-e6881",
  storageBucket: "testnode-e6881.appspot.com",
  messagingSenderId: "840897691787",
  appId: "1:840897691787:web:3510f95b6b0ac6ae77948e",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      try {
        const db = getDatabase(app);
        const dbRef = ref(db, "test");

        onValue(dbRef, (snapshot) => {
          setData(snapshot.val());
        });
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div
        className=""
        style={{
          height: "100vh",
          width: "100%",
          background: `url(${Images.bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col pt-20 ">
          <div className="text-6xl font-bold text-white pr-8 mb-4 pb-4 pl-4 sm:pr-20 sm:mb-8 sm:pb-8 sm:pl-20 sm:pt-16">
            Recirculatory Aquaculture System
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start sm:ml-20">
            <div className="flex flex-col text-center pt-5 p-4 text-white justify-center cursor-pointer bg-panelblue w-48 h-48 rounded rounded-3xl mb-4 mr-4 sm:mr-6 opacity-75 hover:scale-105 transition-transform duration-300 ease-in-out">
              <div>
                <img
                  src={Images.temp}
                  alt=""
                  className="w-16 h-16 mx-auto mb-2"
                ></img>
              </div>
              <div className="font-bold text-3xl">
                {data?.temperature !== undefined
                  ? Object.entries(data.temperature)
                      .sort(
                        ([timestampA], [timestampB]) => timestampB - timestampA
                      )
                      .map(([timestamp, value], index) => (
                        <div key={index}>Value: {value}</div>
                      ))[0]
                  : "N/A"}
              </div>
              <div className="flex text-center pt-2 text-xl">Temperature</div>
            </div>
            <div className="flex flex-col text-center pt-5 p-4 text-white justify-center cursor-pointer bg-panelblue w-48 h-48 rounded rounded-3xl mb-4 mr-4 sm:mr-6 opacity-75 hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src={Images.tds}
                alt=""
                className="w-16 h-16 mx-auto mb-2"
              ></img>
              <div className="font-bold text-3xl">
                {data?.tdsValue !== undefined
                  ? Object.entries(data.tdsValue)
                      .sort(
                        ([timestampA], [timestampB]) => timestampB - timestampA
                      )
                      .map(([timestamp, value], index) => (
                        <div key={index}>Value: {value}</div>
                      ))[0]
                  : "N/A"}
              </div>
              <div className="flex text-center pt-2 text-xl">TDS</div>
            </div>
            <div className="flex flex-col text-center pt-5 p-4 text-white justify-center cursor-pointer bg-panelblue w-48 h-48 rounded rounded-3xl mb-4 mr-4 sm:mr-6 opacity-75 hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src={Images.waterlevel}
                alt=""
                className="w-16 h-16 mx-auto mb-2"
              ></img>
              <div className="font-bold text-3xl">
                {data?.WaterLevel !== undefined
                  ? Object.entries(data.WaterLevel)
                      .sort(
                        ([timestampA], [timestampB]) => timestampB - timestampA
                      )
                      .map(([timestamp, value], index) => (
                        <div key={index}>Value: {value}</div>
                      ))[0]
                  : "N/A"}
              </div>
              <div className="flex text-center pt-2 text-xl">Water level</div>
            </div>
            <div className="flex flex-col text-center pt-5 p-4 text-white justify-center cursor-pointer bg-panelblue w-48 h-48 rounded rounded-3xl mb-4 mr-4 sm:mr-6 opacity-75 hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src={Images.floratee}
                alt=""
                className="w-16 h-16 mx-auto mb-2"
              ></img>
              <div className="font-bold text-3xl">
                {data?.flowRate !== undefined
                  ? Object.entries(data.flowRate)
                      .sort(
                        ([timestampA], [timestampB]) => timestampB - timestampA
                      )
                      .map(([timestamp, value], index) => (
                        <div key={index}>Value: {value}</div>
                      ))[0]
                  : "N/A"}
              </div>
              <div className="flex text-center pt-2 text-xl">Water Flow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
