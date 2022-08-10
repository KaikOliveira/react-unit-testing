import { render } from "@testing-library/react";

import App from "./App";

describe("App Component", () => {
  test("should render text testing", () => {
    const { getByText } = render(<App />);

    expect(getByText("testing")).toBeInTheDocument();
  });

  test("should classname test", () => {
    const { getByText } = render(<App />);

    expect(getByText("testing")).toHaveAttribute("class", "test");
  });
});

// QUERY nao falha caso nao encontrar elemento
// Find espera o elemento aparecer
// const {  } = render(<App />);

// it("should render list items", () => {
//   const { getByText } = render(<App />);

//   expect(getByText("Kaik")).toBeInTheDocument();
//   expect(getByText("Joao")).toBeInTheDocument();
//   expect(getByText("Lucas")).toBeInTheDocument();
// });

// it("should be able to add new item the list", async () => {
//   const { getByText, getByPlaceholderText } = render(<App />);

//   const inputElement = getByPlaceholderText("Novo item");
//   const addButton = getByText("Adicionar");

//   userEvent.type(inputElement, "Novo");
//   userEvent.click(addButton);

//   // EXAMPLE waitFor Utilizado para Promise
//   await waitFor(() => {
//     expect(getByText("Novo")).toBeInTheDocument();
//   });

//   // EXAMPLE FIND espera o elemento
//   // expect(await findByText("Novo")).toBeInTheDocument();
// });

// it("should be able to remove item the list", async () => {
//   const { getByText, getAllByText, queryByText } = render(<App />);

//   const removeButtons = getAllByText("Remover");

//   userEvent.click(removeButtons[0]);

//   // EXAMPLE waitForElementToBeRemoved Utilizado para remover em Promise
//   await waitForElementToBeRemoved(() => {
//     return getByText("Kaik");
//   });

//   // EXAMPLE waitFor com QUERY para negação || .not === negação
//   await waitFor(() => {
//     expect(queryByText("Kaik")).not.toBeInTheDocument();
//   });
