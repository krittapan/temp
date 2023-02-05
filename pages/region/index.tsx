import Link from "next/link";
import React from "react";
import Layout from "../../src/components/Layout/Layout";
import ActivitySlideShow from "../../src/components/Slideshow/ActivitySlideShow";
import { IActivity } from "../../src/models/ActivityModel";
import { IArticle } from "../../src/models/ArticleModel";
import { firebaseService } from "../../src/services/firebase/firebaseService";
import BarChart from '../../src/components/Chart/BarChart';
const fetchActivity = async () => {
  const resMain = await firebaseService.list("Activity");
  const mainActivity = (resMain as IActivity[]).map((item) => {
    return {
      id: item.id,
      image: item.ImgUrl,
    };
  });

  const resSub = await firebaseService.list("Article");
  const subActivity = (resSub as IArticle[]).map((item) => {
    return {
      id: item.id,
      image: item.ImgUrl,
    };
  });

  return { mainActivity, subActivity };
};


const fetchChart = async () => {
  const res = await firebaseService.fetchRegionChart("OverAll_GI");

  const chartLabels: any[] = [];
  const chartDatas: any[] = [];
  res.map((item) => {
    chartLabels.push(item.name);
    chartDatas.push(item.Val);
  });


  return { chartDatas, chartLabels };
}

const page = ({ activities, chartData }) => {
  return (
    <Layout>
      <section className="relative">

        <div className="flex items-center space-x-[4px] absolute top-[48px] right-0">
          <img src="/images/compass.svg" />
          <div>
          <h1 className="text-[104px] text-[#274769] leading-[50px]">ประเทศไทย</h1>
          <h1 className="text-[48px] text-[#274769]">Thailand</h1>
          </div>
        </div>


        <svg
          xmlns="http://www.w3.org/2000/svg"
          // xlink="http://www.w3.org/1999/xlink"
          className="w-full"
          viewBox="0 0 1187.288 1896.953"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_75066"
                data-name="Rectangle 75066"
                width="1187.288"
                height="1896.953"
                fill="none"
              />
            </clipPath>
          </defs>
          <g
            id="Group_22448"
            data-name="Group 22448"
            clipPath="url(#clip-path)"
          >
            {/* EN */}
            <Link href="/region/northeast">
              <path
                id="Path_41751"
                data-name="Path 41751"
                d="M729.238,335.277c-3.222-9.285,3.968-9.069,3.557-16.625-5.69-1.344-13.618-.774-17.92-3.373-6.185-3.738-2.042-4.479-13.55-8.468-5.98-2.075-9.857-3.543-14.347-6.805-9-6.541-14.729-15.447-27.466-15.905-11.223-.4-15.142,15.488-24.038,20.2-6.832,3.617-9.156-4.281-17.022,1.438-1.909,10.537,3.729,14.782-6.272,21.075-4.167,2.622-6.651,2.332-11.4,1.109-4.388-1.13-5.75,1.157-10.755,3.1-7.858,3.053-4.108,12.229-13.306,15.793-4.359,1.689-7.568-.03-11.824,3.176-3.7,2.788-2.273,5.945-6.757,8.269-9.43,4.887-20.017-2.159-23.226,5.825-1.552,3.86-.715,7.194-2.968,11.985-1.5,3.189-3.972,6.75-7.512,7.5-4.687.989-7.845-1.53-9.846-3.686-4.661-5.019-4.473-1.925-11.035-2.225-6.085-.277-2.9-5.24-7.591-7.341-6.3-2.824-11.557.233-12.945,5.512-.664,2.531.512.787-1.128,3.1-2,2.819-2.826,1-3.578,4.668,3.7,1.432,8.414-.322,12.28-.645,8.3-.695,3.668,9.161,4.23,12.177,1.447,7.747,11.635-1.906,15.574,8.329,2.393,6.218,9.4,3.512,7.308,13.732-1.917,9.349-16.953,11.189-11.534,30.281,25.812,6.438,20.886-21.792,30.895-26.853,6.352,1.3,4,5.778,7.931,10.007,5.626-.031,6.721-3.8,11.8-2.293,5.267,1.563,4.891,5.108,10.305,5.662,4.922.5,7.218-2.353,13.16-1.845,5.319.454,5.916,4.238,8.8,7.5,4.768-.148,8.46-3.042,11.9.119,4.51,4.151-.207,7.4.585,12.811,7.321,3.752,5.868,1.6,7.408,11.026.812,4.969,3.966,11.035,1.576,15.681-2.057,4-7.781,5.4-12.721,2.438-4.614-2.774-1.92-1.384-7.719-2.013-3.38-.366-4.735-1.442-8.133-1.99,1.434,5.463,3.827,5.439.678,10.7-5.873,1.507-5.252-1.806-8.891-.59-1.684,3.779.281,7.468-1.359,12.432-1.5,4.54-3.511,6.319-5.266,9.685-1.655,3.173-1.594,8.193-4.224,9.871-2.539,1.619-5.744,1.658-9.906,4.767-1.714,9.781,2.663,11.68-3.184,20.027-3.686,5.263-4.561,11.35-3.415,19.4,7.666,2.312,12.276,4.659,8.6,14.008-2.18,5.546-8.365,5.935-7.294,17.524,11.8,8.417,11.235,7.819,8.086,25.581-1.542,8.7,1,26.576,2.113,35.314,1.627,12.756-6.938,1.09-.646,30.577,1.691,7.923,9.4,23.381,8.856,29.149L551.751,728.1a20.324,20.324,0,0,1-9.783,3.413,37.978,37.978,0,0,1-6.7.142c-13.2-.311-4.069,6.79-3.543,12.661.572,6.368-3.3,7.5-2.684,14.363,10.119,6.7,9.279,3.552,20.607,2.478,5.716-.542,5.559,1.53,11.59.206,13.936-3.056,11.752,1.857,21.82,2.656,11.539.917,9.953.594,17.938,8.8,2.346,2.41,3.662,5.457,6.555,7.458.073-.03,12.89-7.823,18.7-8.57,4.718-.606,5.921,2.7,8.823,4.1,4.328,2.083,6.924.246,10.992,3,1.271,6.472-3.651,5.682-3.711,12.727,2.83,2.3,5.691,1.68,9.7,5.148,2.9,2.508,5.956,5.817,9.247,6.7,4.175-2.044,4.365-5.367,8.813-6.087,4.241,1.589,4.911,5.584,7.93,8.7,6.79.647,14.261-2.778,19.379-2.207,7.416.826,5.873,5.59,17.6,2.075,6.7-2.008,8.273-4.6,16.763-4.631,13.113-.056,9.761,3.754,15.872,5.639,5.33-.783,3.1-3.058,8.627-4.693,5.309-1.567,6.733.721,12.366.088,5.351-.6,6.281-1.486,12.165-.45,13.734,2.423,15.542-17.652,47.966-19.374,11.824-.629,13.459-.418,23.635-3.891a171.042,171.042,0,0,1,21.708-5.637c21.2-4.31,30.748,16.363,68.947,6.354,7.808-2.046,16.018-3.54,24.82-2.413,9.029,1.156,15.181-1.605,23.94-.092,9.546,1.65,12,4.189,23.457,1.642,17.493-3.888,8.873-6.566,35.512-4.946,20.57,1.251,25.535.332,35.136,20.227,2,4.149,2.452,6.658,8.258,6.082,3.456-4.283,2.7-10.9,5.4-12.868,4.289-3.137,10.984,1.475,15.011-3.495,4.248-5.241,5.695-4.943,12.844-5.246,16.258-.69,27.876-13.249,25.545-30.517-.439-3.257.042-5.411-.419-8.343-.5-3.164-1.732-4.577-1.673-8.286.12-7.6,4.955-7.643,8.668-10.957,2.495-14.462-2.2-8.725,10.818-15.465-.691-7-16.343-10.927-20.9-16.74-9.35-11.923,10.059-14.3,10.729-24.659-7.712-1.068-12.595,0-16.633-5.413-.132-5.844,4.947-9.131,9.8-10.956,13.064-4.908,12.731-12.229,18.721-23.6,6.135-11.645-11.427-16.532-20.034-18.12-7.7-1.42-12.6,1.463-14.844-6.346-1.975-6.87-7.187-7.073-7.85-13.318-.69-6.526,6.711-7.629,8.637-12.142-6.272-8.983-33.648-2.8-46.7-7.056-5.848-1.909-12.585-7.538-14.306-12.948-3.469-10.9,4.828-12.844-2.529-21.329-4.517-5.209-12.327-8.343-14.982-12.338-1.927-2.9-2.109-7.137-4.48-8.706-7.644-5.059-25.7-3.482-16.426-19.4,1.814-3.113,4.937-4.594,5.041-8.081.076-2.565-1.884-7.7-1.963-12.336-.144-8.5,1.257-16.705,1.9-24.857.963-12.145-.717-12.207,4.417-22.889,3.63-7.551,3.7-13.686,3.214-22.759-.6-11.072.422-14.932-6.06-21.691-11.5-11.986-32.922-11.006-44.344-23.525-11.827-12.962,3.317-2.777-22.606-18.793-13.523-8.354-19.419-11.423-28.045-25.7L940.4,293.3c-2.221-4.439-6.112-16.492-8.111-19.2-6.072-8.216-9.189,4.7-19.067-1.207-2.918-1.743-4.506-3.967-8.723-4.615-4.413-.679-9.675.684-13.483-.576-2.9-.961-5.374-3.787-7.753-5.386-5.912-3.977-33.974-6.372-46.255-.615-5.044,2.364-4.724,2.305-5.108,8.311-.778,12.159-11.12,5.89-15.956,11.142-2.657,2.885-.422,6.712-3.239,9.993-2.442,2.844-6.644,2.1-7.463,6.6-.726,3.981,8.774,13.011-1.488,18.817-14.292,8.088-21.727-12.339-42.528-1.975-6.623,3.3-16.057,26.886-31.987,20.69"
                transform="translate(13.908 7.511)"
                fill="#e8e8e8"
                fill-rule="evenodd"
                className="hover:fill-[#BDB43F55] cursor-pointer duration-500"
              />
              <text x="760" y="525" className="fill-[#3B877B]">
                ภาคตะวันออกเฉียงเหนือ
              </text>
              <circle cx="850" cy="550" r="12" fill="#3B877B" />
            </Link>

            {/*  */}
            <Link href="/region/north">
              <path
                id="Path_41752"
                data-name="Path 41752"
                d="M303.557,9.2c-1.05,7.254,7.355,7.4,7.041,15.56-.171,4.447-1.885,3.5-1.666,9.71.133,3.773.762,6.637-.3,9.664-4.057,1.617-16.775,2.474-21.82,1.6-7.667-1.333-10.929-10.478-27.4-2.315-3.12,1.547-5.061,3.33-8.938,3.55-8.564.483-12.066-5.9-18.594-.147,1.5,7.172,7.218,5.876,6.076,18.333-.492,5.385-1.443,4.7.8,10.121,6.275,15.168-2.882,12.683-5.654,13.543-5.79,1.8-4.075,11.574-14.352,2.957-14.228-11.929-8.257.978-22.008,2.536-6.22.706-13.3-2.054-18.708-.263-7,3.821,2.567,9.813-21.572,6.327a40.084,40.084,0,0,0-13.208.534c-5.356,1.072-4.914,3.5-10.916,3.89-7.114.459-7.087-.615-9.239-5.413-1.772-3.952-13.564-11.909-18.692-11.054l-7.324,3.343c-7.028,4.4-.419,10.846-9.525,16.025l-14.027,7.129c-5.571,3.03-4.433,7.374-7.582,13.565-2.937,5.773-8.251,5.235-11.58,9.443.841,6.593,9.545,6.382,13.124,12.963-.869,5.533-2.565,4.1-5.244,7.93.849,6.853,7.451,11.011,1.052,19-5.184,6.472-12.943,2.161-16.426,10.076-.4,7.34,5.672,4.84,5.347,14.97-.326,10.218,3.9,8.86,6.752,14.4,4.716,9.142,4.586,27.086-7,28.553-8.669,1.1-10.228-3.427-16.356.328-7.263,4.452-3.817,7.653-9.85,11.34-8.153,4.983-7.664,1.239-12.314-2.612-4.777-3.956-10.4-4.594-13.45.873,2.514,5.345,6.077,6.715,9.139,10.461,3.038,3.712,1.933,11.062,3.123,16.263,9.05,3.169,7.679-3.016,12.456-6.831,4.556-1.016,10.069,1.359,11.216,5.975,1.511,6.089.451,12.069,1.761,17.8,2.774,12.135,14.489,13.9,12.711,26.214-5.141,4.074-5.16,2.45-9.786,4.628-1.132,6.564-.776,10.454,2.721,14.57,6.357,7.48,20.7,5.992,27.559.1,18.2-15.626,14.3,3.009,22.249,12.649,2.254,2.731,3.7,5.541,5.857,7.36,11.883,10.03,6,15.736,25.089,9.374,16.5-5.5,10.109,11.206,10.061,13.028,2.661,2.507,4.792,3.427,4.68,8.942l-5.382,1.959c1.319,3.723,2.811,4.488,4.162,9.125,3.44,11.83,9.534,3.052,18.514,4.3,4.369.607,6.321,2.675,11.606,3,.544-7.629-2.035-6.235-3.744-10.812-1.808-4.843,1.979-5,3.6-9-12.957-11.476-3.878-12.351.187-20.143-2.522-6.742-6.263-1.565-7.968-14.017-.953-6.966-4.748-12.069,2.562-16.059,4.306.762,2.891,2.28,6.587,3.138,3.728.864,3.513-1.277,6.925,1.045,2.343,1.6,2.525,3.58,5.933,4,5.713.7,8.224-4.75,11.035,2.925,3.445,9.413-3.394,10.559-3.636,16.313-.286,6.789,3.965,12.088-.943,18.921a40.451,40.451,0,0,0-2.615,4.5c8.377-2.953,13.262-13.352,24.341-13.584,12.35-.255,13.669,11.41,22.373,16.24,12.13,6.73,19.916,11.117,26.412.735,2.655-4.241,8.8-5.142,11.914-.3,1.52,2.362,1.364,4.5,2.293,7.423,1.406,4.428,1.571,2.544,4.568,4.977.467,4.265-.51,7.539,2.424,10.037,2.01,1.709,6.332,3.715,8.8,1.772,2.585-2.035,2.431-6.344,3.755-9.591,1.952-4.781,4.074-2.6,3.81-9.659-6.639-1.873-6.839-6.954-7.572-14.11-.445-4.332,1.944-4.787,1.892-7.6-.062-3.349-2.833-2.975-2.427-9.175,7.341-4.444,4.588-5,8.473-13.376,4.03-8.691,3.83-5.768,11.436-10.6,23.063-14.64,18.152,5.308,26.048,6.592,5.527-.706,5.886-6.266,9.268-8.279,3.3-1.967,15.074-3.028,16.891,1.534,1.589,3.985.7,4.058,5.093,6.406,10.242,5.47,3.7,11.935,1.2,19.644l-2.223,12.52c4,2.967,7.594,2.287,12.12,4.2,3.411,16.4-8.424,27.5-4.345,32.552,2.558,3.458,4.746,1.785,9.19.812,4.678-1.025,7.167-.887,11.819-1.349,5.252-.521,17.058-3.308,19.211-7.343,2.456-4.607-.477-4.459,4.994-7.381,5.9-3.149,5.6-11.016,13.569-12.914,2.192-.521,9.264-1.57,11.273-1.179,7.959,1.55,4.581,6.614,16.953-2.236,5.4-3.863,18.009-10.97,22.153-16.624,1.71-2.335,3.386-5.928,5.581-7.665,3.745-2.965,4.992-1.206,7.928-5.275,8.65-11.992,6.971-1.6,15.683-5.353,2.668-1.152,7.547-2.079,8.007-3.762.025-14.716-.346-11.089,6.825-19.4,10.55-12.221,19.148-17.044,16.429-35.882-.589-4.073-3.008-5.576-2.515-10.789.557-5.9,3.947-4.648,3.525-10.495-5.247-3.878-12.88-1.128-17.114-5.71-5.084-5.5.67-12.709,3.4-16.239,2.933-3.79,8.789-6.533,13.413-9.5,5.971-3.832,10.83-3.542,13.369-10.068-2.119-5.5-5.11-3.892-6.013-8.825-1.163-6.351,3.053-18.868,6.287-23.855,2.519-3.885,5.374-5.426,7.353-8.528,8.7-13.638-22.189-15.853-15.473-41.085,2.649-9.956-7.919-12.854-.087-22.938,2.513-3.235,15.37-12.067,2.327-16.506-12.9-4.389-12.321,5.528-24.781,2.706-3.454-.782-8.636-1.481-11.729-3.275-4.926-2.856-2.771-5.976-8.891-7.119-3.463,6.006-.695,14.035-7.757,16.56-8.887,3.177-23.646-3.594-33.465-3.043-5.157.288-5,3.074-8.506,5.151-6.237,3.69-14.139-2.254-16.873-5.556-.952-5.646,1.218-8.259.884-13.226-.35-5.212-3.887-5.269-5.983-9.106-5.541-10.146,7.652-21.506,12.2-28.614,1.84-2.873,4.089-6.938,5.975-9,8.72-9.514,8.412-3.128,9.126-21.538-7.335,1.95-5.338,12.2-15.779-2.588-3.143-4.452-4.9-5.771-8.316-9.321-2.65-2.756-6.455-5.5-9.456-8.163-7.359-6.533-8.433-15.149-19.532-5-4.415,4.035-6.807,19.16-16.679,13.964C386.3,24.147,387.99,18.029,387.372,13c-2.906-3.424-7.262-2.824-9.312-6.54C375.159,1.2,377.7.394,368.583.026c-12.325-.5-13.428,5.969-19.061,12.757-6.551,7.9-10.722,7.314-23.981,5.57C306.19,15.81,313.979,6.4,303.557,9.2"
                transform="translate(0 0.001)"
                fill="#e8e8e8"
                fill-rule="evenodd"
                className="hover:fill-[#BDB43F55] cursor-pointer duration-500"
              />
              <text x="210" y="175" className="fill-[#F09536]">
                ภาคเหนือ
              </text>
              <circle cx="250" cy="200" r="12" fill="#F09536" />
            </Link>

            {/*  */}
            <Link href="/region/central">
              <path
                id="Path_41753"
                data-name="Path 41753"
                d="M506.659,366.05c2.182-2.737,8.389-13.609,4.56-17.274-2.226-2.13-5.133,1.273-7.888,2.187-5.078,1.685-4.839-.769-9.252-1.322-1.865,3.015-3.655,6.6-7.364,8.475-7.22,3.643-3.868,1.458-8.233,7.61-4.98,7.017-9.637,8.4-17.062,13.777-27.685,20.055-14.437,5.924-32.908,8.62-9.727,1.421-7.3,4.422-12.358,10.458-2.066,2.468-2.785,1.511-4.753,3.148-3.076,2.557-.61,5.508-6.382,9.525-6.431,4.475-17.691,4.742-25.118,5.6-4.21.485-9.9,2.95-13.833,1.453-11.244-4.284,3.2-16.764,1.508-35.078-12.379-1.6-13.008-2.644-11.286-11.042.734-3.582-.093-2.846.207-5.413.89-7.655,9.882-14.439.3-19.5-5.789-3.054-3.024-2.919-6.1-7.845-19.022-2.072-11.251,5.148-19.808,8.392-8.853,3.356-8.408-7.823-15.439-11.538-4.621.258-18.023,7.633-20.207,10.107-1.092,1.235-4.253,8.5-4.691,10.25-1.883,7.535-1.462,3.67-5.774,8.192,2,6.928,3.853,3.194,1.245,11.143-.755,2.305-.1,10.535.988,12.783,2.2,3.281,7.719,1.846,5.817,8.951-.868,3.236-1.789,2.751-3.1,4.856-5.3,8.535-.736,21.116-20.055,9.684-2.231,13.837,4.959,4.3,7.587,15.4,2.422,10.226,3.9,5.915,10.849,11.221,3.715,2.836,5.78,12.693.344,15.249-7.986,3.755-6.6,1.635-10.93,11.482l-10.276-.986c-2.369,5.015-.659,9.568-2.494,12.514-2.244,3.6-7.464,2.1-11.673,3.351-3.589,12.5,15.622,16.52-19.946,25.105-6.973,1.683-6.38-2.934-12.318-1.882-1.675,10.953,10.392,13.312,9.162,25.988-.946,9.756,4,7.963,5.078,13.433,1.357,6.875-5.176,3.08.206,12.9,3.343,6.1,1.293,9.653.822,16.012-.434,5.886,3.113,8.594,5.106,13.32,3.478,8.246-1.022,8.528-.685,15.543.306,6.374,1.556,9.026-1.666,15.108-2.26,4.267-7.128,7.738-5.265,12.133,3.483,8.214,2.217,6.226,2.845,15.732,1.4,21.264-6.276,16-3.961,30.5,3.479,21.785,2.871,18.063,17.014,16.6,7.82-.809,24.139,5.294,27.611,9.232,2.542,6.694-6.076,10.7-3.142,16.339,5.089,3.491,10.482-1.442,15.9,1.7,3.415,1.983,4.176,8.441,6.057,12.227,6.613-.8,6.611-5.285,9.92-9.446,5.381-1.1,6.69.3,11.066.914,8.386,1.172,5.294-6.765,23.615,8.2,7.4,6.043,4.626,6.878,8.233,15.521,2.625,6.289,6.589,9.59,4.622,19.122-1.708,8.284-6.145,7.157-1.18,18,4.68,10.225,3.221,8.732-3.656,14.306-9.258,7.5,2.94,11.217,4.9,12.635,7.153,5.163-.46,10.732,1.347,16.96.869,1.6,3.089,2.2,4.925,3.208,7.229,3.986,2.188,6.019,5.017,10.794.827,1.4,2.992,2.568,4.04,4.013,2.8,3.862-1.25,6.352-1.535,11.776,4.889-1.42,12.531-9.162,12.92,2.474.2,6.094.74,2.334,2.7,7.264.156,5.8-27.02,23.622-30.2,32.886-1.132,3.291-.916,16.52-.1,19.99,2.756.611,2.88,1.094,5.543.34l-.172-4.938c-2.135-16.592,33.221-20.734,33.453-20.829,1.923-.783,4.716-3.34,7.68-4.668,7.343-3.291,11.559-2.714,20.06-1.243,7.335,1.269,13.282-1.779,19.692-3.928,2.611-.876,19.006-2.154,21.983-1.71,14.066,2.1,19.078,13.633,35.606,3.775.475-5.367-.359-8.817,3.586-11.409,3.972-2.61,6.147-2.14,6.909-7.386-4.34-3.1-10.438-3.758-9.7-11.335.568-5.823,8.46-5.385,8.26-11.545-.118-3.626-7.806-8.019-3.148-14.962,3.405-5.076,11.979-2.449,17.629-2.6,7.765-.207,9.47-.954,13.743-6.591,6.938-9.151,23.148,2.27,25.166-15.482,1.069-9.415,4.969-4.773,11.006-9.139,1.31-5.148-.455-9.606,5.587-10.086,4.655-.37,9.984,2.153,10.38-3.828.214-3.221-3.991-6.254-6.1-9.5-3.7-5.716-4.6-2.828-11.173-3.931-5.132-4.494-2.218-7.9-14.208-5.716-6.941,1.264-10.988,2.093-17.059-1.662-6.7-4.146-2.9-8.42-1.269-15.041,2.026-8.252-5.441-6.042-2.421-16.306,4.774-6,14.254-.38,22.531-4.937,5.549-3.057,8.959-7.621,14.829-12.042-.893-4.839-4.547-12.475-6.407-17.709-2.349-6.613-3.058-12.361-4.707-19.073-2.565-10.448,1.789-11.24,2.693-18.5,1.156-9.283-4.752-26.69-1.564-41.482,2.031-9.421,3.075-12.485-3.336-17.124-5.746-4.156-7.737-6.9-3.8-15.57,2.405-5.294,9.156-8.124,5.841-15.372-1.554-2.483-5.376-2.31-8.3-3.225-3.888-19.163,3.828-19.376,5.861-28.146,1.184-5.105-1.842-9.985.849-15.076,2.25-4.254,6.641-4.008,11.064-6.481.889-2.733,1.525-5.666,2.685-7.98,1.265-2.523,2.76-4.055,4.014-6.576,3.669-7.376-.238-11.6,3.646-17.506,3.911-1.668,4.645.566,9.128,1.145.283-6.187-3.6-3.786-1.387-10.133,3.709-1.919,8.49.622,13.891.974,5.176.339,7.724,6.34,12.549,2.619,4.095-3.159,1.1-9.116.133-14.044-2.12-10.737.219-6.669-7.613-10.821-.9-5.058,2.545-10.335.032-12.588-2.607-1.6-5.845.833-10.547.667-2.712-2.341-4.045-5.21-6.261-7.431-7.293-.5-9.326,2.168-14.876,1.713-7.458-.612-6.264-3.61-10.625-5.51-4.57-1.991-7.022,3.536-11.942,2.267-4.3-1.108-3.241-6.025-6.521-9.385-4.952,2.484-6.11,14.969-9.81,19.34-4.2,4.956-11.042,9.662-20.94,7.157-7.492-1.9-5.194-15.563-2.17-21.457,3.246-6.329,11.816-9.053,9.424-17.3-2.516-3.913-3.03-1.167-5.576-4.457-1.319-1.705-1.617-4.5-2.338-6.2-18.7-1.527-13.946-.157-13.692-15.676-6.06.622-13.351,3.7-16.993-.662-1.532-4.666.511-4.351,3.081-7.381,1.663-1.959.332-15.67,20.242-9.359"
                transform="translate(6.416 9.78)"
                fill="#e8e8e8"
                fill-rule="evenodd"
                className="hover:fill-[#BDB43F55] cursor-pointer duration-500"
              />
              <text x="360" y="600" className="fill-[#EE7950]">
                ภาคกลาง
              </text>
              <circle cx="400" cy="625" r="12" fill="#EE7950" />
            </Link>

            {/*  */}
            <Link href="/region/south">
              <path
                id="Path_41754"
                data-name="Path 41754"
                d="M267.416,1259.361c-2.572-8.1-3.219-4.979-7.383-9.2-5.677-5.758,1.126-7.858,3.9-10.155,3.773-3.127,6.881-14.334,13.643-19.849,4.044-3.3,5.915-2.294,8.959-7.772,1.947-3.506,3.087-8.466,5.058-11.69,6.248-10.222,18.136-5.44,7.651-17.116-8.022.76-8.5-1.507-12.258-1.43-4.5.091-4.865,3.148-12.224,1.5-6.093-1.368-13.479-2.379-18.81-6.035-1.369-.938.025-.217-1.648-1.034-3.094,2.435-5.649,4.625-11.045,5.751-5.487,1.144-9.151,1.721-9.994,6.733-.938,5.559.688,10.033-2.746,14-6.688,7.729-25.57,9.607-29.876,20.368-.9,2.264-.23,25.149-.688,30.781-1.006,12.331-6.6,15.058-11.722,22-2.583,3.5-3.151,7.988-5.16,11.582-3.126,5.593-7.788,5.665-19.661,30.564-3.4,7.12-13.023,11.314-12.964,20.06,4.553-2.167,8.361-9.244,13.649-8.141,1.9,7.266-4.423,10.47-6.335,15.9C155,1354,146.8,1353.871,146.4,1356.6c4.055,4.64,7.469-1.911,13.337,4.272-.441,5.728-3.542,3.693-7.31,6.468s-3.331,3.946-9.415,4.113c-1.032-2.155-1.6-3.976-4.86-5.163-3.892,11,.755,11.453.823,18.327.065,6.331-6.529,7.17-9.519,11.515,2.2,6.454,7.388,6.3,1.6,13.125a16.7,16.7,0,0,0,2.268,5.589c1,1.224,1.781.942,3.582,2.993-.643,7.214-5.136,4.793-9.246,9.042.4,3.683,2.49,3.527,3.656,7.631,3.4,12,.741,9.7-7.8,8.048-7.432,11.052-1.6,9.581-4.4,17.43-1.9,5.32-9.763,4.168-7.176,13.982,1.449,5.5,1.213,3.782.956,9.7-.209,4.821.969,3.5,3.454,6.244,7.288,8.042.211,8.444-4.965,9.854-1.17,7.4,5.233,8.516,5.529,16.113.325,8.325-1.342,9.542,1.185,19,3.529.664,5.166-.027,7.851,1.849,2.148,1.5,2.384,2.839,4.245,4.312a22.644,22.644,0,0,0,4.494-1.063,15.766,15.766,0,0,0,1.875-.865c3.353-1.808,3.691-10.582,2.9-14.284-1.161-5.419-6.131-.536-1.773-9.194,1.765-3.507,2.856-22.328,8.75-17.012,2.99,2.854.635,7.8.507,11.946,3.085,2.117,4.617,2.392,6.883,5.184,1.161-1.447,1.459-2.57,2.737-4.369l5.194,1.12c.142-.175.309-.433.388-.555l1.048-1.681c.435-.776.787-1.687,1.075-2.246,4.95,1.015.98,1.022,5.314,2.856l2.712-7.183c5.858.389,7.668,4.567,6.891,11.146-5.048,2.479-6.991,1.658-8.143,8.158,7.017-1.221,2.855-5.085,9.934-3.388,2.779,6.277-2.3,4.517-2.2,10.113,4.227.932,6.295-1.91,8.229,1.5,1.293,2.282-.963,5.035-1.449,7.68-1.119,6.109-1.135,11.82,1.02,16.451,7.9,1.607,4.954-2.053,9.292,4.457,9.183.073,8.692-10.051,18.188-5.51,2.1,6.572-3.639,5.61.457,10.966,3.782,4.945,6.47.733,9.336,2.854,2.694,1.956,2.186,5.457-.153,7.9-9.8,10.223-8.922,22.5,3.282,19.265,1.6-5.321-.536-7.447,3.513-11.5,5.466.06,4.339,2.081,6.168,6.106,7.177.846,8.661,3.211,10.575,9.016,9.949-.109,4.259,2.009,9.433,7.113,5.5,5.422,3.51,3.432,4.088,11.78,12.987,9.37,3.829,7.509,7.483,17.24,1.283,3.416,9.611,10.362,15.344,7.066,2.315-5.147-.483-9.219,4.346-13.083,5.777.756,5.125,5.252,5.461,11.75,2.009-.867,7.545-5.453,8.643.281.9,4.732-3.056,5.885-5.587,7.879.089,1.377,3.532,11.165,4.519,12.42,3.345,4.253,6.157.089,11.577.784.332.765.73,2.049,1.212,3.071l1.331,2.271c4.662-1.837,10.6-.829,7.723,4.938-2.516,5.055-5.554,3.166-5.884,11.085,7.307,7.192,8.087,5.2-1.98,11.252,1.272,12.022,9.523,3.847,15.121,15.019,7.53,1.235,10.117-1.252,12.761,5.633,2.9,7.55,5.191,4.625,12.286,6.385,2.651,7.553-1.46,4.571-1.366,11.779,8.992,3.56,10.169-1.278,12.578,9.568,5.073-.819,2.976-2.228,8.008-.213,1.175,4.275-.193,9.312,5.664,8.14,6.8-1.36,10.9-20.093,15.586-24.283,14.024-12.528,16.056,12.669,27.678,18.417,5.355,2.647,18.9,1.381,25.784,1.715,11.646.564,6.485,9.36,18.925,2.9,8.146-4.229,14.5,2.823,17.546,7.137,8.47,12.015,2.082,11.883-.421,17.99,7.536,15.395,45.323-5.085,45,22.884-.07,5.847-3.219,8.32-6.1,11.539-13.057,14.569-17.7,13.951-9.153,31.057,3.351,6.7,7.574,17.743,13.523,20.872,8.68,4.565,17.846-2.451,20.005-10,3.948-13.8,5.775-11.488,17.944-16.353,8.6-3.437,14.348-7.774,25.468-7.789,7.572-.012,8.718,5.32,12.6,9.2,11.869,11.878,41.624,2.871,44.653-9.635,1.313-5.421-2.953-11.321,2.862-17.21,3.535-3.579,8.689-5.744,12.188-9.858,2.676-3.145,5.228-13.874.8-17.643-1.734-1.476-4.587-1.824-6.954-3.6l-19.469-13.124c-13.33-9.517-13.911-15.68-20.887-23.175-9.845-10.576-11.84-7.7-20.246-22.94-11.489-20.826-6.978-11.62-26.871-16.34-5.882-1.4-10.036-4.391-15.679-5.554a3.335,3.335,0,0,0-.288.664c-2.524,6.133-4.489,5.861-11.706,6.182-22.286,1-22.192,2.453-44.848-5.41-6.029-2.092-8.271-1.588-12.5-6-2.865-2.99-7.788-4.119-11.739-5.879-12.617-5.62-10.553-14.037-17.612-17.842-7.148-.04-7.745,6.814-15.421,2.423a116.9,116.9,0,0,1-12.386-7.92c-4.851-3.866-2.671-11.116,3.712-9.856,5.466,1.078,4.578,7.1,12.314,6.49-.9-.964-8.754-14.406-9.3-16.645-2.177-8.977,1.048-12.77-4.267-22.084-8.016-14.045-13.433-44.779-15.72-62.557-1.021-7.945.005-16.575-2.634-23.931-1.667-4.657-12.271-28.775-16.5-33.012-1.416-1.417.093-.232-1.783-1.476.951,9.345,7.992,13.258,3.487,16.987-3.809,3.152-21.12-5.2-22.259-14.9-1.08-9.167-2.843-5.8-6.9-12.645-11.674-19.676-8.694-27.444-6.995-47.641.764-9.081-1.96-8.381-5.191-13.291-2.679-4.071-1.675-11.548-2.509-17.018-13.143-3.483-5.689-.613-9.4-18.734-10.912-1.969-16.5-2.822-23.844,2.949-10.492,8.242-17.643-.2-24.352,3.48-3.158,1.814-1.422,4.374-3.861,7.091-3.367,2.759-5.5,1.264-8.806,3.495-3.2,2.157-2.152,4.445-7.4,5.08-2.851-2.892-2.607-4.617-4.035-6.109-1.633-1.705-4.907-1.615-7.927-2.68-5.259-1.855-8.878-5.883-6.672-12.469,2.581-3.321,8.433-4.164,11.72-5.884-1.127-2.689-15.662-17.4-22.395-33.031-7.679-17.826-6.852-10.883-2.465-28.182,1.83-7.209-4.318-8.039-.712-15.593,2.2-4.6,6.9-6.568,5.924-11.715-1.213-6.408-3.691-7.736-3.019-15.622,1.205-2.691,7.664-5.32,9.351-7.8-4.234-1.691-4.511.23-6.432-3.858l-3.35-6.716c2.374-12.985,10.451-4.165,21.365-6.261"
                transform="translate(3.235 34.214)"
                fill="#e8e8e8"
                fill-rule="evenodd"
                className="hover:fill-[#BDB43F55] cursor-pointer duration-500"
              />
              <text x="295" y="1575" className="fill-[#F2C24F]">
                ภาคใต้
              </text>
              <circle cx="325" cy="1600" r="12" fill="#F2C24F" />
            </Link>

            {/*  */}
            <Link href="/region/west">
              <path
                id="Path_41755"
                data-name="Path 41755"
                d="M160.915,337.9c-3.053,4.054-1.483,5.176-.2,10.326,1.616,6.509-1.106,6.779,3.852,10.326,10.624,7.6.673,10.025-2.05,16.085.923,5.638,3.607,5.845,5.421,8.86,1.654,2.748,1.514,2.681-.073,5.125-1.628,2.507-1.259,0-2.917,3.638,1.644,3.868,5.371,7.208,4.262,11.956-1.763,7.551-10.154,1.457-14.87.66-8.708-1.471-16.517,8.9-21.023-6.26-1.6-5.375-4.449-6.393-4.46-12.051l5.527-1.956c-1.53-4.005-4.373-4.213-4.684-8.263-.352-4.573,2.138-3.826,1.217-8.825-7.8-2.471-10.831,2.713-18.6,2.828-7.444.109-9.6-5.588-13.074-9.932-1.638-2.05-4.082-3.3-5.925-5.552-6.1-7.453-8.409-13.447-11.782-22.5-10.607.451-7.979,9.068-27.23,10.911,1.082,8.711,13.562,17.681,18.886,22.055,3.947,3.243,6.223,6.952,10.693,10.441a98.854,98.854,0,0,1,10.888,9.381c9.872,10.354.008,14.668,18.84,22.559,6.666,2.793,6.509,6.046,10.062,11.094,17.674,25.114,21.365,2.551,35.463,26.226,15.563,26.133-6.914,25.918,2.5,37.141a47.162,47.162,0,0,0,5.1,5.478c4.633,4.212,3.042,7.622,7.124,13.145,5.852,7.919,2.35,24.085,9.847,30.762,3.918-.9,4.989-3.275,7.3-6.022,3.8-4.518,3.213-1.615,9.349-2.238,2.73-3.169,5.28-9.005,8.019-11.2,5.235-.336,9.365,3.945,10.742,7.821,1.947,5.477-2.379,9.41-3.22,14.211,1.735,4.426,3.144,2.46,3.142,7.931-2.881,4.715-4.343,1.111-7.184,8.771-3.586,9.667-14.471,6.815-22.094,4.52-5.5-1.655-6.286,1.456-8.695,4.133-5.157-.489-6.474-4.377-11.462-2.51-3.994,6.964,7.4,13.932,5.866,27.2-1.436,12.415-8.425,13.458-6.681,28.318,1.11,9.463,2.542,24.007,1.906,33.6-.362,5.464-3.79,8.865-9.822,8.093-5.056-.646-8.121-6.581-12.462-.12-1.8,3.147,2.954,14.894-7.875,9.6-6.373-3.116-8.427.7-13.614,4.013-7.138,4.559-12.45,9.511-7.142,18.481,4.1,6.929,1.02,11.87,4.4,15.862,4.422,5.223,5.343,4.631,8.219,12.939,2,5.781,5.057,8.253,6.161,14.087,4.472,23.632,8.329,25.21,23.845,37.865,13.346,10.885,19.405,17.656,31.819,28.97,8.807,8.026,14.427,8.733,25.447,15.1,10.659,6.162,11.742,11.616,18.883,21.645l8.945,12.2c7.573,11.375,7.108,18.66,9.629,30.918,2.143,10.411,12.831,18.088,9.428,29.386-5.819,19.33-20.365,14.557-14.275,43.321,1.541,7.273,8.682,25.688,12.688,28.692,5.28,3.962,8.725,2.45,12.248,8.034,4.42,7,2.265,5.857,10.062,10.2,16.4,9.131,4.343,14.942,7.752,29.246,1.289,5.41,4.353,8.664,4.871,15.289.853,10.949-1.594,7.611,3.344,16.8,23.25,2.217,6.25,7.723,12.131,18.027,5.423,9.5.855,6.7,2.322,16.589,9.469,7.7,13.265,8.9,4.736,21.24-3.48,5.032-1.116,9.69-4.065,12.665-2.83,2.854-10.324,1.959-14.527,2.709l.251,11.258c-5.243,2.51-5.315.415-8.947,4.98.188,9.043,8.012,7.005-2.635,16.884-4.77,4.425-8.842,5.967-13.155,10.626-4,4.323-7.654,7.941-12.385,12.288-4.452,4.089-5.6,9.769-8.927,14.36,6.135,5.4,9.05,4.467,18.616,6.833,7,1.731,6.278-.855,11.152-1.432,4.332-.513,4.469,1.936,10.872,1.785-.4-7.645.8-8.378,4.063-13.087,9.864-14.226,5.387-10.016,4.74-17.726-.06-.711.213-6.571.3-7.938.469-7.421,3.486-4.647,7.233-9.636,4.093-5.449.726-13.8,10.281-24.092,18.8-20.257,13.145-33.983,21.034-46.807,7.05-11.461,26.435-15.867,28.443-22.88,1.4-4.88-3.521-7.87-5.648-10.62-8.527-11.029,3.7-15.812,5.545-22.013,2.474-8.321-8.52-9.465-9.644-24.257-1.205-15.853-1.486-18.513,7.2-27.4,1.857-1.9,7.674-6.657,8.577-9.188,2.278-6.386-3.563-6.484-1.781-13.076,1.511-5.592,13.448-15.319,8.222-21.688-3.471-4.232-6.681-4.772-9.772-7.905-2.082-2.111-6.065-6.276-10.465-6.019-8.942.522-13.39,9.51-13.218-17.028.043-6.708,1.825-8.57,5.4-12.138,3.166-3.159,4.37-5.658,7.925-8.835l17.372-15.926c-1.358-4.556-1.433-.213-2.423-4.64-.764-3.415.792-2.625-.615-6.274-3.64-1.13-2.5-.069-5.2,1.629-4.318,2.718-8.584.893-6.774-4.938.769-2.48,1.5-3.121,2.1-6.106-2-2.682-4.073-3.226-5.312-5.5-2.018-3.7.13-3.7-.7-7.183-2.864-2.654-7.828-3.126-9.012-6.963-1.92-6.226,2.756-6.721,1.481-13.879-3.776-3.717-10.1-3.207-10.679-10.607-.54-6.867,5.647-8.5,9.085-11.1.393-10.1-8.452-9.3-2.1-24.378,4.8-11.379-3.127-16.144-4.579-23.784-1.411-7.42-1.554-6.153-5.71-10.268-3.284-3.25-4.7-3.858-8.472-6.507-5.293-3.717-4.085-3.229-10.428-1.869-3.65.781-8.375-1.175-12.991-1.295-2.242,4.071-1.251,3.617-4.532,6.7-11.148,10.486-9.983-8.146-15.945-9.8-6.827-1.893-8.722,3.808-16.068-2.378-1.76-7.366,2.544-9.6,3.933-15.709-3.648-4.3-20.721-9.6-27.772-7.743-15.694,4.141-15.472-7.678-17.327-19.255-1.55-9.681-1.05-8.722,2.509-15.757,2.01-3.974,2.32-21.044.691-26.2-.87-2.753-2.39-3.614-2.782-6.125-.738-4.713,3.873-8.113,6.031-12.234,4.129-7.879.519-10.4,1.65-17.514,1.277-8.039,3.884-5.2-.852-13.966-7.79-14.419,1.025-15.775-5.411-28.112-4.736-9.079,3.78-7.724-.221-13.767-5.2-7.85-3.92-2.829-3.956-14.718-.013-4.292-4.48-8.685-6.485-11.928-1.768-2.86-3.783-7.122-3.09-10.819,1.585-8.455,9.25.524,18.454-2.732,6.988-2.47,11.758-1.524,15.7-6.161.583-6.241-3.818-8.83-2.063-14.6,1.883-6.2,8.119-1.915,11.543-5.094,2.632-2.517,1.249-2.842,1.506-6.68.6-8.964,6.151-7.716,12.926-6.288,2.631-7.254,5.163-9.551,12.35-11.292,2.342-16.7-9.915-7.243-13.433-21.928-2.115-8.827-6.718-3.5-8.252-10.219-.815-3.579,1.449-11.458,2.024-15.585-2.5-3.487-2.609,0-4.324-5.105-.615-1.831-1.034-5.87-2.04-7.629-4.468-7.812-8.4,2.642-10.4,4.495-7.544,6.993-22.649-1.922-28.568-5.192-7.586-4.19-9.977-18.967-23.585-14.4-8.12,2.723-15.731,14.676-23.393,12.951-1.675-8.69,7.679-6.779,4.551-21.229-3.224-14.9,8.161-10.064,2.061-22.305a2.167,2.167,0,0,0-.574-.037c-7.286.321-5.168,3.215-12.725-2.648-4.1-3.176-2.819-.578-7.921-1.789-3.3-.784-2.57-1.809-5.463-2.928"
                transform="translate(1.579 9.666)"
                fill="#e8e8e8"
                fill-rule="evenodd"
                className="hover:fill-[#BDB43F55] cursor-pointer duration-500"
              />
              <text x="260" y="825" className="fill-[#107C1C]">
                ภาคตะวันตก
              </text>
              <circle cx="300" cy="850" r="12" fill="#107C1C" />
            </Link>

            {/*  */}
            <Link href="/region/east">
              <path
                id="Path_41756"
                data-name="Path 41756"
                d="M574.784,750.223c-5.134-2-9.172-1-14.292-.1,4.183,8.276,7.335-2.123,13.906,8.412,2.766,4.438,9.535,7.595,5.548,14.474-4.739,8.177-13.968-.962-14.423,6.888-.568,9.821-3.94,6.041-10.487,9.666-3.427,6.646.4,10.227-7.349,14.678-6.787,3.9-13.791,1.652-17.875,4.169-4.748,2.926-1.454,7.234-13.189,8.794-7.841,1.042-14.692-1.9-19.941,2.046-1.591,8.58,4.474,7.243,4,13.7-.628,8.5-17.395,10.277-1.615,18.558l2.138,1.565c.216-.421,3.631,4.911-4.03,9.924-5.061,3.313-5.517,1.7-5.271,9.617l6.577.641c1.891,3.6,6.051,14.539,3.44,19.9-2.693,3.572-6.665,2.591-10.795,4.994,1.67,9.647,8.623,6.674.107,21.441-7.955,13.8,3.145,10.684,2.371,22.012-4.929,3.613-1.679-.306-4.147,5.431-1.865,4.332-2.112.268-3.527,4.988,3.074,2.5,5.077.551,7.756,4.424,1.614,2.335,2.269,6.827,1.02,9.53-1.1,1.959-3.347,2.62-5.31,3.771a30.964,30.964,0,0,0-4.76,3.424c.024,5.915,2.874,7.823,4.367,11.754,12.282.315,7.4-4.6,13.623-6.521.1-.031,17.423-1.072,18.418-1.025,5.9.278,11.979,1.5,17.618,1.912,10.45.758,8.826-1.527,13.911,5.256,11.526.846,19.252-1.318,30.148-1.342,14.905-.032,13.855,2.494,22.921-6.476,7.872-7.789,13.922-4.675,19.044,2.911l12.64,17.819c.848-1.982.3-11.9,7.662-5.576,3.848,3.307,2.382,8.044,5.555,11.16,1.383-2.736.342-3.156,2.5-5.989,5.238-.058,5.519,1.993,6.532,6.876,1.7,8.211,5.392,5.474,12.19,13.232,1.756,2,3.8,5.176,6.351,4.777,3.617-6.707-5.135-8.334-1.9-13.2,1.283-1.627,1.31-2.637,4.8-1.837,8.221,1.885,5.406,12.6,5.8,15.53,7.812-2.2,5.641-7.792,14.273-4.7,2.343,11.81-11.253,10.547-13.756,19.991,7.228,2.028,14.252,2.018,21.337,4.2,6.989,2.156,8.149,5.238,12.557,6.973,5.318,2.092,5.133-.968,4.01-4.974-2.556-9.118,7.143-10.947,11.781-3.887,2.994,4.561,4.349,8.466,7.723,11.664,9.576,9.076,8.14,9.5,12.885,24.228.538-17.224-7.842-24.907-8.65-33.106-2.065-20.947,11.778-21.485,12.686-30-2.369-4.265-5.885-4.216-8.34-9.371-2.43-5.1-1.23-8.18-7.561-9.322-6.162-1.111-19-6.068-23.855-9.274-1.049-7.964,4.4-7.871,4.872-14.572.291-4.1-4.726-8.8-6.692-12.021-7.835-12.829-1.042-24.04-6.359-29.742-3.221-3.458-7.372-5.319-9.828-9.584-3.7-6.425-1.828-8.974-1.851-16.275-.037-10.817-6.835-23.95-1.5-33.67,7.487-4.595,26.222,3.231,30.028-6.848-1.444-5.03-2.849-1.783-3.51-7.05,3.988-6.405,14.694-4.817,18.686-8.811,1.442-5.494-.959-9.278,2.946-14.623,4.467-1.16,3.38.068,6.887.246,11.883.6-1.7-13.7,15.548-22.762,11.535-6.062,5.987-7.964,11.463-18.189-9.4-2-8.894.257-16.584.15-4.266-.06-5.119-1.6-9.5-.233-3.893,1.213-2.637,2.441-5.207,3.831-8.392,4.539-10.355-10.658-28.584-3.124-22.53,9.309-18.154,0-28,.918-4.132.385-11.646,2.843-15.908,2.379-4.633-.505-6.143-5.6-8.884-8.715-5.647,2.29-5.6,10.98-15.346,2.318-1.43-1.271-2.1-1.689-3.437-2.724-8.8-6.832-9.38-3.537-11.276-6.442-2.092-5.587,2.094-9.261,3.541-13.251-18.567-2.525-11.43-7.881-19.036-5.054-17.877,6.647-15.577,12.41-22.495,3.517-13.909-17.878-12.347-8.552-27.1-14.3"
                transform="translate(14.092 21.783)"
                fill="#e8e8e8"
                fill-rule="evenodd"
                className="hover:fill-[#BDB43F55] cursor-pointer duration-500"
              />
              <text x="580" y="875" className="fill-[#C2CA51]">
                ภาคตะวันออก
              </text>
              <circle cx="625" cy="900" r="12" fill="#C2CA51" />
            </Link>

            {/*  */}
            <path
              id="Path_41757"
              data-name="Path 41757"
              d="M119.474,1537.319c-2.685-.822.88-.05,0,0m263.971-203.827c2.18,5.969,7.277,6.352.482,14.362-5.3.515-13.969-1.944-15.875-6.969-2.672-7.045-2.875-3.646-3.928-7.494-2.427-8.87,9.279-7.36,14.032-5.92,3.49,1.058,3.982,2.44,5.288,6.021m-28.7,24.133c2.287-1.754,12.011-.064,15.972-.034,4.588.036,11.977-1.872,14.921,1.095,4.683,4.723-1.05,7.487-3.174,9.606,1.021,9.751-.628,16.7-12.6,15.142-13.313-1.736-11.55-6.539-12.671-8.657-1.279-2.417-1.8-1.267-3.571-3.7-.679-2.28-.269-12.382,1.127-13.452m-26.905-1.144c1.836,6.269.675,11.9-7.143,10.677-3.248-6.7-1.78-13.257,7.143-10.677M169.795,1549.868c-9.706-.043-9.443-17.85.882-17.559,3.933,3.64,2.18,13.752-.882,17.559m-6.354-.659s-8.892-11.176-14.273-7.728c-2.236,9.654,5.06,9.042,4.526,16.967-.184,2.733-1.976,6.61-.919,9.33a4.666,4.666,0,0,0,7.763,1.01c2.088-2.322,4.527-15.806,2.9-19.578M346.91,1282.157c3.947,3.648,7.544,19.575-5.564,19.3-2.265-5.892-.615-11.68.922-17.877ZM119.694,1537.386l-.22-.067a7.317,7.317,0,0,1-.932-.052c-.11-.011-.508.283-.589.081s-.408.047-.593.129c-2.868,11.443,3.744,12.369-3.616,25.05-2.757,4.752-.752,7.027,1.834,10.67,1.926,2.715,3.748,6.323,6.5,8.163.511-8.013.335-7.214,8.15-6.407,1.677-16.755,1.552-8.632,2.805-13.219.7-2.581-.193-1.554-.012-4.025.438-6,10.964-5.778,5.9-12.285-4.267-2.4-6.056,4.373-12.307-1.761-1.333-1.306-4.566-5.568-6.923-6.277M228.8,1609.517c.6,3.011,2.618,4.346,2,7.234-3.213,1.8-6.581-3.621-8.269-5.994-3.106-4.361-1.163-8.925-1.286-14.8,2.735-.222,6.273-1.007,8.536.52a5.128,5.128,0,0,1,1.633,6.162c-1.642,2.833-3.759,1.067-2.61,6.879M112.32,1407.549c6.053-1.216,6.209,4.514,5.455,10.03-.6,4.4-.491,10.362-2.918,14.131l-4.891-.224c-4.362-5.77.811-22.15,2.355-23.937"
              transform="translate(3.148 37.284)"
              fill="#e8e8e8"
              fill-rule="evenodd"
            />

            {/*  */}
            <path
              id="Path_41758"
              data-name="Path 41758"
              d="M475.052,965.533c6.327-.291,2.294,9.771.983,12.119-4.092.806-4.279.68-7.628-.709-1.152-5.5.29-11.117,6.645-11.41"
              transform="translate(13.61 28.077)"
              fill="#e8e8e8"
              fill-rule="evenodd"
            />

            {/*  */}
            <path
              id="Path_41759"
              data-name="Path 41759"
              d="M470.495,937.6c6.533-3.485,14.393,1.613,3.035,9.419-3.177,2.182-6.959,3.685-7.628-1.306-.827-6.172,1.355-6.385,4.593-8.113"
              transform="translate(13.543 27.233)"
              fill="#e8e8e8"
              fill-rule="evenodd"
            />

            {/*  */}
            <path
              id="Path_41760"
              data-name="Path 41760"
              d="M719.5,1086.443c6.218-2.6,10.932,2.956,13.061,6.735,2.7,4.8-.124,12.969-2.786,15.192-9.07,7.578-20.157-17.8-10.275-21.927"
              transform="translate(20.809 31.574)"
              fill="#e8e8e8"
              fill-rule="evenodd"
            />

            {/*  */}
            <path
              id="Path_41761"
              data-name="Path 41761"
              d="M676.346,1041.083c2.582-13.171,28,3.246,26.742,17.223-5.643,3.068-14.556,7.051-19.1.546-2.373-3.4-8.5-13.376-7.64-17.768"
              transform="translate(19.665 30.134)"
              fill="#e8e8e8"
              fill-rule="evenodd"
            />
          </g>
        </svg>


        <section className="mt-[120px]">
          <div className="text-[32px] text-center">กราฟแสดงสิ่งบ่งชี้ทางภูมิศาสตร์ (01 Thailand)</div>
          <BarChart data={chartData}/>
        </section>
        <section className="mt-[180px] mb-[98px]">
          <Link href="/knowledge">
            <h1 className="mb-[16px]">กิจกรรมและคลังความรู้</h1>
          </Link>

          <ActivitySlideShow
            mainActivity={activities.mainActivity}
            subActivity={activities.subActivity}
          />
        </section>
      </section>
    </Layout>
  );
};

export default page;

export const getServerSideProps = async (context) => {
  const activities = await fetchActivity();
  const chartData = await fetchChart();

  return {
    props: {
      activities,
      chartData
    },
  };
};
