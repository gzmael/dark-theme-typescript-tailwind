import tw, { styled } from 'twin.macro';

export const Container = styled.div`
  ${tw`mb-2`}
  label,
  input {
    ${tw`w-full`}
  }

  &:focus-within {
    label {
      ${tw`text-teal-500 transition-all ease-linear duration-500`}
    }
  }
`;

export const InputGroup = styled.div`
  ${tw`rounded border-2 border-solid bg-primary border-ternary px-2 py-3`}
  &:focus-within {
    ${tw`border-teal-800 transition-all ease-linear duration-500`}
  }
  input {
    ${tw`w-full border-0 bg-transparent text-dark-300 focus:text-teal-800 transition-all ease-linear duration-500`}
  }
`;
