import tw, { styled } from 'twin.macro';

export const Container = styled.div`
  label,
  input {
    ${tw`w-full`}
  }

  &:focus-within {
    > div {
      ${tw`focus:border-teal-500 transition-all ease-linear duration-200`}
    }
    label {
      ${tw`text-teal-500`}
    }
  }
`;

export const InputGroup = styled.div`
  ${tw`rounded border-2 border-solid bg-primary border-ternary px-2 py-3 text-dark-300`}
  input {
    ${tw`w-full border-0 bg-transparent`}
  }
`;
