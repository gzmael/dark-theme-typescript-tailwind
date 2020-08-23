import tw, { styled } from 'twin.macro';

import bgImgHeader from '../../assets/images/bg-header-form.png';
import bgImgHeaderLight from '../../assets/images/bg-header-form-light.png';

export const Container = styled.div`
  ${tw`bg-primary h-screen w-screen flex flex-col justify-center items-center px-3 w-full`}
  > img {
    ${tw`w-2/3 mb-4`}
  }
`;

export const Box = styled.main`
  ${tw`w-full`}

  > div {
    ${tw`h-32 w-full bg-cover rounded-t-lg flex justify-center items-center`}
    background: url(${bgImgHeaderLight}) no-repeat;
    background-size: cover;

    &.dark {
      background-image: url(${bgImgHeader});
    }
  }

  form {
    ${tw`w-full bg-secondary p-4 rounded-b-lg shadow-lg`}

    h2 {
      ${tw`text-center mb-4`}
    }

    label {
      ${tw`text-ternary font-bold font-display`}
    }

    button {
      ${tw`bg-teal-500 border-0`}
    }
  }
`;
