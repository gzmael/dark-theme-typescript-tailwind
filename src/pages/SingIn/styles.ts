import tw, { styled } from 'twin.macro';

import bgImgHeader from '../../assets/images/bg-header-form.png';
import bgImgHeaderLight from '../../assets/images/bg-header-form-light.png';

export const Container = styled.div`
  ${tw`bg-primary min-h-screen w-screen flex flex-col justify-center items-center px-3 py-8 w-full transition-colors ease-linear duration-200`}
  > img {
    ${tw`w-2/3 md:w-1/2 lg:w-1/4 mb-4`}
  }

  footer {
    ${tw`text-sm text-gray-600 mt-8`}
  }
`;

export const Box = styled.main`
  ${tw`w-full md:w-2/3 lg:w-1/2 flex flex-col md:flex-row justify-center items-center`}

  > div {
    ${tw`h-32 w-full bg-cover rounded-t-lg md:rounded-none md:rounded-l-lg md:h-88`}
    background: url(${bgImgHeaderLight}) no-repeat;
    background-size: cover;

    &.dark {
      background-image: url(${bgImgHeader});
    }
  }

  a {
    ${tw`pt-4 text-sm text-blue-500 w-full flex justify-center`}
  }

  form {
    ${tw`w-full md:h-88 bg-secondary p-4 rounded-b-lg md:rounded-none md:rounded-r-lg shadow-lg`}

    h2 {
      ${tw`text-ternary text-center mb-4`}
    }

    label {
      ${tw`text-ternary font-bold font-display`}
    }

    > button {
      ${tw`bg-teal-500 border-0 px-4 py-3 flex items-center justify-center text-white w-full rounded font-body font-bold `}
      svg {
        ${tw`mr-1`}
      }
    }
  }
`;

export const ButtonTheme = styled.button`
  ${tw`bg-transparent border-0 text-ternary mt-4`}
`;
