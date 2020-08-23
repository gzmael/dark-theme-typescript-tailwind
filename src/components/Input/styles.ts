import tw, { styled } from 'twin.macro';

export const Container = styled.div`
  ${tw`mb-2`}
  label,
  input {
    ${tw`w-full transition-colors ease-linear duration-500`}
  }

  &:focus-within {
    label {
      ${tw`text-teal-500`}
    }
  }

  &.error {
    label {
      ${tw`text-red-700`}
    }
    & > div {
      ${tw`border-red-700`}
    }
  }
`;

export const InputGroup = styled.div`
  ${tw`rounded-lg border-2 border-solid bg-primary border-primary px-2 py-3 transition-all ease-linear duration-200`}
  &:focus-within {
    ${tw`border-teal-800`}
  }
  input {
    ${tw`w-full border-0 bg-transparent text-dark-300 focus:text-teal-800`}
  }
`;
