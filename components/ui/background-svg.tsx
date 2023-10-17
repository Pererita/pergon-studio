export default function BackgroundSvg () {
    return (
        <div className="absolute w-screen h-screen">
        <svg id="visual" viewBox="0 0 900 600" version="1.1">
          <rect x="0" y="0" fill="#eeeeee"></rect>
          <defs>
            <linearGradient id="grad1_0" x1="33.3%" y1="0%" x2="100%" y2="100%">
              <stop offset="20%" stopColor="#ffffff" stopOpacity="1"></stop>
              <stop offset="80%" stopColor="#ffffff" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_1" x1="33.3%" y1="0%" x2="100%" y2="100%">
              <stop offset="20%" stopColor="#ffffff" stopOpacity="1"></stop>
              <stop offset="80%" stopColor="#eeeeee" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_0" x1="0%" y1="0%" x2="66.7%" y2="100%">
              <stop offset="20%" stopColor="#ffffff" stopOpacity="1"></stop>
              <stop offset="80%" stopColor="#ffffff" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_1" x1="0%" y1="0%" x2="66.7%" y2="100%">
              <stop offset="20%" stopColor="#eeeeee" stopOpacity="1"></stop>
              <stop offset="80%" stopColor="#ffffff" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <g transform="translate(900, 0)">
            <path
              d="M0 486.7C-78.6 463.6 -157.2 440.4 -232.5 402.7C-307.8 365 -379.7 312.9 -421.5 243.4C-463.4 173.8 -475.1 86.9 -486.7 0L0 0Z"
              fill="#f6f6f6"
            ></path>
            <path
              d="M0 243.4C-39.3 231.8 -78.6 220.2 -116.2 201.4C-153.9 182.5 -189.9 156.5 -210.8 121.7C-231.7 86.9 -237.5 43.5 -243.4 0L0 0Z"
              fill="#ffffff"
            ></path>
          </g>
          <g transform="translate(0, 600)">
            <path
              d="M0 -486.7C91.8 -477.9 183.5 -469 243.4 -421.5C303.2 -374.1 331.1 -288.2 366.3 -211.5C401.6 -134.8 444.2 -67.4 486.7 0L0 0Z"
              fill="#f6f6f6"
            ></path>
            <path
              d="M0 -243.4C45.9 -238.9 91.8 -234.5 121.7 -210.8C151.6 -187.1 165.5 -144.1 183.2 -105.8C200.8 -67.4 222.1 -33.7 243.4 0L0 0Z"
              fill="#ffffff"
            ></path>
          </g>
        </svg>
      </div>
    )
}