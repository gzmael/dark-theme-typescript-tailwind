import tw, { styled } from 'twin.macro';

export const Container = styled.div`
  ${tw`mb-2`}
  label,
  input {
    ${tw`w-full transition-colors ease-linear duration-200`}
  }

  &:focus-within {
    label {
      ${tw`text-teal-500`}
    }
  }

  &.error {
    label,
    span {
      ${tw`text-red-500`}
    }
    & > div {
      ${tw`border-red-500`}
    }
    span {
      ${tw`text-xs`}
    }
  }
`;

export const InputGroup = styled.div`
  ${tw`rounded-lg border-2 border-solid bg-primary border-primary px-1 py-3 flex text-dark-300 transition-all ease-linear duration-200`}
  &:focus-within {
    ${tw`border-teal-500 text-teal-700`}
  }
  input {
    ${tw`w-full pl-1 border-0 bg-transparent text-dark-300 focus:text-teal-700`}
  }
  input + svg {
    ${tw`text-red-500`}
  }
  > button {
    ${tw`bg-transparent border-0 text-dark-300 px-1`}
  }

  .error {
    ${tw`text-xs text-red-500`}
  }
`;
