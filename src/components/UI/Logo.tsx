const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 200 223.177"
      className="-mt-1"
    >
      <defs>
        <pattern
          id="pattern"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
          viewBox="0 0 46 61"
        >
          <image
            width="46"
            height="61"
            href="data:image/png;base64,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"
          />
        </pattern>
      </defs>
      <g
        id="Group_1"
        data-name="Group 1"
        transform="translate(239.679 -59.092)"
      >
        <path
          id="Path_5"
          data-name="Path 5"
          d="M21.025-33.91,106,16.033l0,99.237L21.229,65.261Z"
          transform="translate(-260 167)"
          fill="#7e30f0"
        />
        <path
          id="Path_6"
          data-name="Path 6"
          d="M21.229-33.886,106.7,15.627l-.7,99.624L19.872,65.759Z"
          transform="translate(-220.269 168.442) rotate(-60)"
          fill="#8d46f4"
        />
        <path
          id="Path_7"
          data-name="Path 7"
          d="M20.117-35.632,106.7,15.627l1.1,96.164L19.872,65.759Z"
          transform="matrix(0.485, 0.875, -0.875, 0.485, -108.493, 133.782)"
          fill="#6c22d7"
        />
        <g id="camera-Filled" transform="translate(-149.004 161.582)">
          <path
            id="Path"
            d="M16.544,0,71.272,8.3,55.014,83.583,0,79.53Z"
            transform="translate(2.748 0.415)"
            fill="rgba(255,255,255,0)"
          />
          <path
            id="camera-Filled_1_"
            d="M33.432,35.805a8.446,8.446,0,0,1-.074,2.508A9.626,9.626,0,0,1,32.6,40.72a8.561,8.561,0,0,1-1.321,2.037,6.039,6.039,0,0,1-1.755,1.4,3.89,3.89,0,0,1-1.882.457,3.179,3.179,0,0,1-1.663-.524A3.935,3.935,0,0,1,24.713,42.7a5.962,5.962,0,0,1-.679-2.145,8.426,8.426,0,0,1,.067-2.527,9.627,9.627,0,0,1,.767-2.429,8.546,8.546,0,0,1,1.336-2.05,6,6,0,0,1,1.771-1.393,3.859,3.859,0,0,1,1.889-.438,3.18,3.18,0,0,1,1.657.546,3.969,3.969,0,0,1,1.248,1.405A6.006,6.006,0,0,1,33.432,35.805Zm16.555-14.66,1.745,14.8a19.031,19.031,0,0,1-.194,5.544,21.609,21.609,0,0,1-1.682,5.312,19.171,19.171,0,0,1-2.9,4.505,13.5,13.5,0,0,1-3.848,3.113l-23.2,12.142a9.136,9.136,0,0,1-4.289,1.119,7.263,7.263,0,0,1-3.809-1.091A8.708,8.708,0,0,1,8.9,63.523,13.136,13.136,0,0,1,7.31,58.71L5.187,43.546a18.922,18.922,0,0,1,.081-5.574,21.532,21.532,0,0,1,1.6-5.385,19.619,19.619,0,0,1,2.863-4.616A14.429,14.429,0,0,1,13.581,24.7l2.264-7.34a12.182,12.182,0,0,1,.789-1.908,10.792,10.792,0,0,1,1.055-1.658,8.843,8.843,0,0,1,1.274-1.337,6.879,6.879,0,0,1,1.445-.947l9.216-4.435a5.127,5.127,0,0,1,1.482-.464,4.174,4.174,0,0,1,1.42.031,4.049,4.049,0,0,1,1.3.506,4.715,4.715,0,0,1,1.129.961l3.661,4.353a8,8,0,0,1,4-.6,7.036,7.036,0,0,1,3.453,1.426,9.178,9.178,0,0,1,2.565,3.18A13.958,13.958,0,0,1,49.987,21.146ZM38.079,33.459a12.154,12.154,0,0,0-1.308-4.294A7.936,7.936,0,0,0,34.3,26.34a6.325,6.325,0,0,0-3.306-1.108A7.748,7.748,0,0,0,27.2,26.1a12.024,12.024,0,0,0-3.569,2.784,16.966,16.966,0,0,0-2.686,4.107,19.141,19.141,0,0,0-1.534,4.876,16.929,16.929,0,0,0-.123,5.083,11.977,11.977,0,0,0,1.372,4.306,7.8,7.8,0,0,0,2.534,2.771,6.322,6.322,0,0,0,3.33,1.019,7.873,7.873,0,0,0,3.766-.942,12.179,12.179,0,0,0,3.505-2.8,17.028,17.028,0,0,0,2.626-4.053,19.144,19.144,0,0,0,1.511-4.788A17.012,17.012,0,0,0,38.079,33.459Zm5.827-12.447a3.061,3.061,0,0,0-.322-1.075,2,2,0,0,0-.611-.71,1.556,1.556,0,0,0-.812-.282,1.857,1.857,0,0,0-.927.207,2.91,2.91,0,0,0-.87.683,4.215,4.215,0,0,0-.658,1.012,4.825,4.825,0,0,0-.381,1.2,4.282,4.282,0,0,0-.039,1.259,3.049,3.049,0,0,0,.326,1.076,1.989,1.989,0,0,0,.614.706,1.556,1.556,0,0,0,.814.277,1.864,1.864,0,0,0,.925-.212,2.92,2.92,0,0,0,.866-.684,4.219,4.219,0,0,0,.654-1.009,4.824,4.824,0,0,0,.379-1.2A4.284,4.284,0,0,0,43.906,21.011Z"
            transform="translate(10.788 8.399)"
            fill="url(#pattern)"
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
