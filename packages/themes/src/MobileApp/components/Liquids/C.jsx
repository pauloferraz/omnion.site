import React from 'react';
import styled, { keyframes } from 'styled-components';
import { base } from '@pagerland/common/src/utils';

const scaleRotate = (scale = 0.8, rotate = `10deg`) => keyframes`
  from {
    transform: scale(${scale}) rotate(${rotate});
  }

  to {
    transform: scale(1) rotate(0);
  }
`;

const opacity = (from = 0, to = 1) => keyframes`
  from {
    opacity: ${from};
  }

  to {
    opacity: ${to};
  }
`;

const AnimatedSvg = styled.svg`
  ${base};

  transform: translate3d(0, 0, 0);
  animation: none !important;

  .liquid & {
    .layer-1 {
      opacity: 0;
      transform-origin: 490px 430px;
      animation: 600ms ${scaleRotate(0.8, '-3deg')} forwards, 600ms ${opacity(0, 0.5)} forwards;
    }
    .layer-2 {
      opacity: 0;
      transform-origin: 490px 430px;
      animation: 600ms ${scaleRotate(0.8, '-3deg')} forwards, 600ms ${opacity()} forwards;
    }
    .layer-3 {
      opacity: 0;
      transform-origin: 490px 395px;
      animation: 600ms ${scaleRotate(0.8, '15deg')} forwards, 600ms ${opacity()} forwards;
    }
    .layer-4 {
      opacity: 0;
      animation: 600ms ${opacity()} forwards 50ms;
    }
    .layer-5 {
      opacity: 0;
      transform-origin: 280px 170px;
      animation: 600ms ${scaleRotate(0.8, '0')} forwards 80ms, 600ms ${opacity()} forwards 80ms;
    }
    .layer-6 {
      opacity: 0;
      transform-origin: 770px 585px;
      animation: 600ms ${scaleRotate(0.8, '0')} forwards 90ms, 600ms ${opacity()} forwards 90ms;
    }
    .layer-7 {
      opacity: 0;
      transform-origin: 840px 665px;
      animation: 600ms ${scaleRotate(0.8, '0')} forwards 90ms, 600ms ${opacity()} forwards 90ms;
    }
    .layer-8 {
      opacity: 0;
      transform-origin: 770px 180px;
      animation: 600ms ${scaleRotate(0.8, '-20deg')} forwards 90ms, 600ms ${opacity()} forwards 90ms;
    }
    .layer-9 {
      opacity: 0;
      transform-origin: 830px 335px;
      animation: 600ms ${scaleRotate(0.8, '20deg')} forwards 90ms, 600ms ${opacity()} forwards 90ms;
    }
  }
`;

const C = ({ ...props }) => (
  <AnimatedSvg
    viewBox="0 0 977 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#faq_clip0)">
      <path
        className="layer-1"
        opacity="0.5"
        d="M516.278 46.7737C574.119 20.7787 646.552 18.7411 702.787 48.0611C759.016 77.381 788.573 164.445 779.504 227.209C774.005 265.25 752.449 301.244 756.33 339.489C762.017 395.486 817.627 430.561 850.054 476.573C893.594 538.354 893.187 626.179 853.97 690.796C814.752 755.408 740.678 795.69 665.2 799.654C589.718 803.623 514.259 773.194 458.122 722.579C424.335 692.117 399.143 652.106 362.06 625.758C313.347 591.143 246.668 596.399 185.061 601.65C126.954 606.601 73.3522 611.553 43.5725 583.07C-38.5214 504.548 11.1115 381.286 64.0451 344.227C125.855 300.959 175.74 308.039 224.792 315.12C262.378 320.546 299.481 325.976 341.084 308.732C376.483 294.067 411.354 271.494 426.721 236.395C441.385 202.903 434.537 96.7356 516.278 46.7737V46.7737Z"
        fill="url(#faq_paint0_linear)"
      />
      <path
        className="layer-2"
        d="M491.845 749.092C479.929 741.038 468.584 732.162 457.932 722.555C424.145 692.093 398.953 652.081 361.87 625.733C330.837 603.683 292.515 597.812 252.857 597.812C243.734 597.812 234.548 598.122 225.352 598.62C225.633 596.641 225.928 594.666 226.238 592.696C232.496 552.68 243.206 509.058 223.377 473.751C209.051 448.245 181.909 433.329 157.666 416.97C133.419 400.606 98.1311 379.335 95.687 350.19C95.0626 342.731 95.8177 333.932 97.8746 324.65C122.964 313.358 146.196 309.786 168.483 309.786C187.698 309.786 206.205 312.443 224.602 315.096C242.993 317.753 261.269 320.405 280.013 320.405C299.576 320.405 319.647 317.516 340.894 308.707C376.293 294.042 411.164 271.469 426.531 236.37C440.842 203.687 434.667 101.774 510.343 50.4517C558.48 89.0448 571.059 164.765 566.48 226.85C563.407 268.546 604.957 301.684 646.178 308.668C655.955 310.324 665.765 310.977 675.605 310.977C703.245 310.977 731.099 305.803 758.909 303.112C756.276 315.091 754.892 327.161 756.14 339.464C761.827 395.462 817.437 430.536 849.864 476.549C873.173 509.62 883.884 550.149 882.795 590.591C750.855 678.013 660.761 635.553 584.586 660.658C562.613 667.893 541.487 679.247 526.14 696.56C512.245 712.226 503.785 731.886 491.845 749.092Z"
        fill="url(#faq_paint1_linear)"
      />
      <path
        className="layer-3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M569.011 95.125C609.729 112.868 657.271 176.933 670.532 219.326C683.793 261.718 691.847 306.85 716.477 343.812C745.177 386.896 792.608 413.274 829.241 449.844C865.883 486.409 906.664 574.698 846.824 647.359C809.736 692.394 731.422 704.344 684.413 684.398C625.177 659.27 552.816 627.685 488.572 631.223C441.858 633.798 388.885 659.909 348.182 682.975C262.7 731.413 101.712 728.567 96.0103 566.151C93.963 507.704 145.875 452.177 197.086 414.639C247.072 377.996 279.499 337.477 299.173 277.932C380.948 30.4692 521.996 74.6378 569.011 95.125V95.125Z"
        fill="url(#faq_paint2_linear)"
      />
      <path
        className="layer-4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M532.122 1.7605e-05C527.205 -0.00966213 523.207 3.97355 523.198 8.89086C523.188 13.8082 527.166 17.8059 532.084 17.8156C537.006 17.8253 541.003 13.8469 541.013 8.92474C541.023 4.00743 537.04 0.00969734 532.122 1.7605e-05ZM586.21 9.01082C586.22 4.09351 590.218 0.110293 595.135 0.119973C600.052 0.129653 604.031 4.12739 604.026 9.04469C604.016 13.9668 600.018 17.9452 595.101 17.9307C590.184 17.9259 586.2 13.9281 586.21 9.01082ZM649.223 9.12931C649.233 4.20716 653.231 0.228792 658.148 0.238472C663.065 0.248151 667.049 4.24588 667.034 9.16319C667.024 14.0853 663.031 18.0637 658.114 18.054C653.197 18.0443 649.214 14.0466 649.223 9.12931ZM721.638 0.387566C716.721 0.377887 712.723 4.35142 712.713 9.27356C712.704 14.1909 716.682 18.1886 721.604 18.1983C726.521 18.208 730.519 14.2247 730.529 9.30744C730.539 4.39014 726.555 0.392406 721.638 0.387566ZM712.236 77.2689C712.246 72.3516 716.244 68.3732 721.161 68.3829C726.083 68.3926 730.062 72.3855 730.047 77.3028C730.037 82.225 726.044 86.2033 721.127 86.1936C716.21 86.184 712.227 82.1862 712.236 77.2689ZM721.161 136.408C716.243 136.399 712.246 140.377 712.236 145.294C712.226 150.217 716.209 154.209 721.127 154.219C726.044 154.234 730.042 150.25 730.051 145.333C730.061 140.416 726.078 136.418 721.161 136.408ZM712.236 213.295C712.246 208.372 716.238 204.394 721.156 204.404C726.073 204.418 730.056 208.411 730.047 213.328C730.037 218.251 726.039 222.229 721.122 222.219C716.2 222.205 712.226 218.212 712.236 213.295ZM721.16 272.429C716.243 272.415 712.245 276.398 712.236 281.315C712.226 286.233 716.209 290.23 721.127 290.24C726.044 290.25 730.042 286.271 730.051 281.354C730.061 276.437 726.083 272.439 721.16 272.429ZM711.759 349.345C711.768 344.423 715.766 340.444 720.684 340.454C725.601 340.464 729.584 344.462 729.574 349.379C729.565 354.296 725.567 358.275 720.65 358.265C715.732 358.255 711.749 354.262 711.759 349.345ZM85.9263 419.225C85.9166 414.302 89.895 410.31 94.8123 410.3C99.7344 410.29 103.727 414.269 103.737 419.186C103.747 424.103 99.7683 428.101 94.8462 428.111C89.9289 428.12 85.936 424.142 85.9263 419.225ZM153.713 479.015C153.703 474.093 157.682 470.1 162.599 470.09C167.521 470.08 171.514 474.059 171.529 478.976C171.538 483.893 167.555 487.891 162.638 487.901C157.72 487.906 153.723 483.932 153.713 479.015ZM230.868 530.447C225.945 530.452 221.967 534.45 221.977 539.367C221.986 544.284 225.984 548.268 230.901 548.258C235.819 548.248 239.802 544.251 239.792 539.333C239.783 534.416 235.785 530.433 230.868 530.447ZM298.65 593.46C293.732 593.465 289.749 597.463 289.764 602.38C289.773 607.297 293.766 611.281 298.683 611.271C303.606 611.261 307.584 607.264 307.574 602.346C307.565 597.429 303.567 593.451 298.65 593.46ZM358.027 665.393C358.018 660.475 361.996 656.483 366.913 656.473C371.836 656.463 375.833 660.442 375.838 665.359C375.848 670.276 371.869 674.274 366.952 674.284C362.03 674.293 358.037 670.31 358.027 665.393ZM435.182 719.486C430.265 719.496 426.282 723.489 426.291 728.406C426.301 733.323 430.299 737.306 435.216 737.297C440.133 737.287 444.117 733.289 444.107 728.372C444.097 723.455 440.099 719.476 435.182 719.486ZM366.918 719.635C361.996 719.644 358.018 723.642 358.027 728.564C358.037 733.481 362.03 737.46 366.952 737.45C371.869 737.44 375.848 733.443 375.838 728.525C375.828 723.608 371.836 719.625 366.918 719.635ZM290.241 728.674C290.236 723.757 294.214 719.764 299.132 719.755C304.054 719.745 308.047 723.723 308.057 728.641C308.066 733.558 304.088 737.556 299.166 737.565C294.248 737.575 290.251 733.597 290.241 728.674ZM230.868 719.904C225.951 719.913 221.968 723.906 221.977 728.823C221.987 733.741 225.985 737.724 230.902 737.714C235.819 737.705 239.798 733.707 239.788 728.79C239.778 723.872 235.785 719.894 230.868 719.904ZM154.19 728.947C154.181 724.03 158.159 720.032 163.076 720.023C167.999 720.013 171.992 723.996 172.001 728.913C172.011 733.831 168.033 737.828 163.115 737.838C158.193 737.848 154.2 733.865 154.19 728.947ZM94.8178 720.172C89.9005 720.186 85.9172 724.179 85.9269 729.096C85.9414 734.019 89.9343 737.997 94.8516 737.987C99.7738 737.973 103.752 733.98 103.742 729.062C103.733 724.145 99.7351 720.162 94.8178 720.172ZM299.127 656.592C294.209 656.602 290.231 660.6 290.241 665.517C290.25 670.439 294.243 674.418 299.161 674.408C304.078 674.398 308.061 670.401 308.051 665.483C308.042 660.566 304.044 656.583 299.127 656.592ZM221.977 665.666C221.967 660.749 225.951 656.756 230.868 656.741C235.785 656.732 239.783 660.715 239.793 665.632C239.802 670.55 235.819 674.547 230.902 674.557C225.984 674.567 221.987 670.588 221.977 665.666ZM163.081 656.891C158.159 656.9 154.18 660.893 154.19 665.81C154.2 670.728 158.193 674.711 163.11 674.701C168.032 674.692 172.011 670.694 172.001 665.777C171.991 660.859 167.998 656.876 163.081 656.891ZM85.9266 665.935C85.9169 661.017 89.9002 657.02 94.8175 657.01C99.7348 657 103.732 660.984 103.742 665.901C103.752 670.818 99.7735 674.816 94.8513 674.826C89.934 674.835 85.9363 670.852 85.9266 665.935ZM221.977 602.504C221.967 597.587 225.951 593.589 230.868 593.579C235.785 593.57 239.783 597.553 239.793 602.47C239.802 607.387 235.819 611.385 230.902 611.395C225.984 611.404 221.987 607.421 221.977 602.504ZM162.599 593.728C157.682 593.738 153.704 597.736 153.713 602.653C153.723 607.575 157.716 611.554 162.638 611.544C167.555 611.529 171.534 607.536 171.524 602.619C171.514 597.702 167.522 593.719 162.599 593.728ZM85.9266 602.798C85.9169 597.88 89.8953 593.883 94.8126 593.878C99.7348 593.863 103.728 597.842 103.737 602.764C103.747 607.681 99.7686 611.679 94.8465 611.689C89.9292 611.698 85.9363 607.715 85.9266 602.798ZM153.713 539.492C153.703 534.575 157.682 530.577 162.599 530.567C167.521 530.557 171.514 534.541 171.529 539.458C171.538 544.375 167.555 548.373 162.638 548.383C157.721 548.388 153.723 544.409 153.713 539.492ZM94.8123 530.716C89.895 530.725 85.9166 534.723 85.9263 539.641C85.936 544.563 89.9289 548.541 94.8462 548.531C99.7683 548.522 103.747 544.524 103.737 539.607C103.727 534.689 99.7345 530.706 94.8123 530.716ZM94.8123 470.209C89.895 470.219 85.9166 474.212 85.9263 479.129C85.936 484.051 89.9289 488.03 94.8462 488.02C99.7683 488.01 103.747 484.012 103.737 479.095C103.727 474.178 99.7344 470.199 94.8123 470.209ZM648.746 281.196C648.756 276.278 652.753 272.3 657.671 272.31C662.588 272.319 666.571 276.312 666.562 281.234C666.552 286.152 662.554 290.13 657.637 290.12C652.719 290.111 648.736 286.118 648.746 281.196ZM658.147 204.285C653.23 204.275 649.232 208.258 649.223 213.176C649.213 218.093 653.196 222.091 658.114 222.1C663.031 222.11 667.029 218.132 667.038 213.209C667.048 208.292 663.07 204.294 658.147 204.285ZM649.223 145.18C649.233 140.258 653.23 136.279 658.148 136.289C663.065 136.299 667.048 140.296 667.039 145.214C667.029 150.131 663.031 154.109 658.114 154.1C653.192 154.09 649.213 150.097 649.223 145.18ZM658.148 68.2639C653.23 68.2543 649.233 72.2326 649.223 77.1499C649.213 82.0673 653.197 86.065 658.114 86.0747C663.031 86.0843 667.029 82.106 667.039 77.1887C667.043 72.2665 663.065 68.2736 658.148 68.2639ZM594.658 204.165C589.741 204.156 585.743 208.139 585.733 213.056C585.723 217.973 589.707 221.971 594.624 221.981C599.541 221.991 603.539 218.012 603.549 213.09C603.554 208.173 599.575 204.175 594.658 204.165ZM586.21 145.031C586.22 140.114 590.217 136.131 595.135 136.14C600.052 136.15 604.035 140.148 604.021 145.065C604.011 149.982 600.018 153.961 595.101 153.951C590.183 153.941 586.2 149.948 586.21 145.031ZM595.135 68.1445C590.218 68.1396 586.22 72.118 586.21 77.0353C586.2 81.9574 590.179 85.9503 595.101 85.96C600.018 85.9697 604.011 81.9913 604.026 77.074C604.035 72.1519 600.052 68.159 595.135 68.1445ZM531.645 136.02C526.728 136.011 522.73 139.989 522.72 144.911C522.711 149.829 526.694 153.826 531.611 153.831C536.528 153.841 540.526 149.862 540.536 144.945C540.541 140.023 536.562 136.03 531.645 136.02ZM523.197 76.911C523.207 71.9937 527.204 68.0153 532.122 68.025C537.039 68.0347 541.017 72.0276 541.008 76.9449C540.998 81.867 537.005 85.8454 532.088 85.8357C527.166 85.826 523.187 81.8332 523.197 76.911ZM462.571 76.911C462.581 71.9937 466.574 68.0153 471.491 68.025C476.413 68.0347 480.392 72.0276 480.382 76.9449C480.372 81.867 476.375 85.8454 471.457 85.8357C466.54 85.826 462.562 81.8332 462.571 76.911ZM471.491 1.7605e-05C466.574 -0.00966213 462.581 3.97355 462.571 8.89086C462.562 13.8082 466.54 17.8059 471.457 17.8156C476.38 17.8253 480.372 13.8469 480.382 8.92474C480.392 4.00743 476.413 0.00969734 471.491 1.7605e-05ZM402.9 8.89086C402.91 3.97355 406.902 -0.00966213 411.82 1.7605e-05C416.742 0.00969734 420.72 4.00743 420.711 8.92474C420.701 13.8469 416.703 17.8253 411.786 17.8156C406.869 17.8059 402.89 13.8082 402.9 8.89086Z"
        fill="url(#faq_paint3_linear)"
      />
      <path
        className="layer-5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M397.336 171.997C397.336 238.086 343.759 291.658 277.67 291.658C211.582 291.658 158.009 238.086 158.009 171.997C158.009 105.909 211.582 52.3315 277.67 52.3315C343.759 52.3315 397.336 105.909 397.336 171.997V171.997Z"
        fill="url(#faq_paint4_linear)"
      />
      <path
        className="layer-6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M581.672 588.775C590.97 576.119 602.682 570.447 614.133 570.418C625.822 570.447 637.786 576.361 647.122 589.492C658.631 605.86 675.154 614.736 691.968 614.707C708.438 614.736 724.666 606.213 736.156 590.397L737.976 587.909C747.263 575.267 758.981 569.58 770.442 569.551C781.902 569.58 793.625 575.267 802.912 587.904L805.361 591.263C816.841 607.07 833.07 615.603 849.554 615.574C866.039 615.603 882.262 607.07 893.747 591.263L896.201 587.909C905.488 575.267 917.206 569.58 928.667 569.551C940.127 569.58 951.845 575.267 961.132 587.904L963.586 591.263C965.953 594.501 970.493 595.212 973.731 592.846C976.969 590.479 977.675 585.939 975.308 582.701L972.859 579.342C961.374 563.54 945.151 555.003 928.667 555.032C912.182 555.003 895.959 563.54 884.474 579.342L882.02 582.701C872.732 595.338 861.015 601.025 849.554 601.054C838.093 601.025 826.376 595.338 817.088 582.701L814.639 579.342C803.154 563.54 786.926 555.003 770.442 555.032C753.957 555.003 737.734 563.54 726.249 579.342L724.429 581.835C715.132 594.486 703.419 600.159 691.968 600.188C680.28 600.159 668.32 594.244 658.979 581.114C647.47 564.745 630.952 555.869 614.133 555.898C597.663 555.869 581.435 564.392 569.945 580.209C567.579 583.447 568.29 587.991 571.528 590.353C574.766 592.72 579.306 592.013 581.672 588.775V588.775Z"
        fill="url(#faq_paint5_linear)"
      />
      <path
        className="layer-7"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M730.134 659.78C739.427 647.128 751.144 641.456 762.595 641.427C774.279 641.456 786.243 647.37 795.584 660.501C807.088 676.869 823.611 685.746 840.425 685.717C856.9 685.746 873.123 677.223 884.618 661.401L886.438 658.909C895.721 646.272 907.443 640.59 918.904 640.561C930.364 640.59 942.082 646.272 951.369 658.914L953.823 662.272C956.19 665.51 960.73 666.217 963.968 663.85C967.205 661.488 967.912 656.944 965.55 653.706L963.096 650.347C951.611 634.545 935.388 626.007 918.904 626.041C902.419 626.007 886.191 634.545 874.711 650.352L872.891 652.844C863.594 665.491 851.881 671.163 840.425 671.197C828.742 671.168 816.777 665.254 807.441 652.123C795.932 635.75 779.409 626.874 762.595 626.907C746.125 626.874 729.897 635.401 718.407 651.218C716.04 654.456 716.752 658.996 719.99 661.363C723.228 663.724 727.767 663.018 730.134 659.78V659.78Z"
        fill="url(#faq_paint6_linear)"
      />
      <path
        className="layer-8"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M705.119 150.168C695.314 168.477 697.69 194.365 714.634 206.373C725.326 213.957 739.197 214.799 751.838 218.26C763.851 221.551 775.007 227.33 786.216 232.765C793.616 236.346 801.22 239.846 809.365 240.939C829.296 243.63 849.473 230.398 857.546 211.982C865.619 193.567 862.57 171.429 852.304 154.141C842.039 136.848 825.283 124.095 806.994 115.732C771.212 99.3733 724.159 114.609 705.119 150.168V150.168Z"
        fill="url(#faq_paint7_linear)"
      />
      <path
        className="layer-9"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M792.222 351.104C795.228 364.128 807.153 374.577 820.458 375.855C826.493 376.431 832.586 375.289 838.341 373.382C853.127 368.479 866.572 357.73 871.726 343.026C876.881 328.328 871.954 309.873 858.528 301.965C831.023 285.766 785.088 320.163 792.222 351.104Z"
        fill="url(#faq_paint8_linear)"
      />
    </g>
    <defs>
      <linearGradient
        id="faq_paint0_linear"
        x1="0"
        y1="413.337"
        x2="485.127"
        y2="852.709"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0035809" stopColor="#F2CAC8" />
        <stop offset="1" stopColor="#EE6DAB" />
      </linearGradient>
      <linearGradient
        id="faq_paint1_linear"
        x1="95.4741"
        y1="399.772"
        x2="533.144"
        y2="791.006"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0035809" stopColor="#F2CAC8" />
        <stop offset="1" stopColor="#EE6DAB" />
      </linearGradient>
      <linearGradient
        id="faq_paint2_linear"
        x1="95.9517"
        y1="394.379"
        x2="494.254"
        y2="784.942"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#98d48d" />
        <stop offset="1" stopColor="#8735AE" />
      </linearGradient>
      <linearGradient
        id="faq_paint3_linear"
        x1="85.9263"
        y1="368.994"
        x2="521.486"
        y2="670.74"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#490e7c" />
        <stop offset="1" stopColor="#C36B84" />
      </linearGradient>
      <linearGradient
        id="faq_paint4_linear"
        x1="158.009"
        y1="171.995"
        x2="304.919"
        y2="288.515"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#490e7c" />
        <stop offset="1" stopColor="#C36B84" />
      </linearGradient>
      <linearGradient
        id="faq_paint5_linear"
        x1="568.547"
        y1="585.303"
        x2="582.34"
        y2="659.055"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEBB75" />
        <stop offset="1" stopColor="#FE8E75" />
      </linearGradient>
      <linearGradient
        id="faq_paint6_linear"
        x1="717.009"
        y1="655.879"
        x2="737.777"
        y2="724.867"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEBB75" />
        <stop offset="1" stopColor="#FE8E75" />
      </linearGradient>
      <linearGradient
        id="faq_paint7_linear"
        x1="699.347"
        y1="175.228"
        x2="782.613"
        y2="256.607"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FB948F" />
        <stop offset="1" stopColor="#DC2789" />
      </linearGradient>
      <linearGradient
        id="faq_paint8_linear"
        x1="791.479"
        y1="336.912"
        x2="839.971"
        y2="377.372"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FB948F" />
        <stop offset="1" stopColor="#DC2789" />
      </linearGradient>
      <clipPath id="faq_clip0">
        <rect width="977" height="800" fill="white" />
      </clipPath>
    </defs>
  </AnimatedSvg>
);

export default C;
