import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { List } from "./List";

describe("List Component", () => {
  it("should render list items", () => {
    const { getByText, rerender, unmount, queryByText } = render(
      <List initialItems={["Kaik", "Joao", "Lucas"]} />
    );

    expect(getByText("Kaik")).toBeInTheDocument();
    expect(getByText("Joao")).toBeInTheDocument();
    expect(getByText("Lucas")).toBeInTheDocument();

    unmount();
    rerender(<List initialItems={["Felipe"]} />);

    expect(getByText("Felipe")).toBeInTheDocument();
    expect(queryByText("Kaik")).not.toBeInTheDocument();
  });

  it("should be able to add new item the list", async () => {
    const { getByText, getByPlaceholderText } = render(
      <List initialItems={["Kaik", "Joao", "Lucas"]} />
    );

    const inputElement = getByPlaceholderText("Novo item");
    const addButton = getByText("Adicionar");

    userEvent.type(inputElement, "Novo");
    userEvent.click(addButton);

    await waitFor(() => {
      expect(getByText("Novo")).toBeInTheDocument();
    });
  });

  it("should be able to remove item the list", async () => {
    const { getByText, getAllByText, queryByText } = render(
      <List initialItems={["Kaik", "Joao", "Lucas"]} />
    );

    const removeButtons = getAllByText("Remover");

    userEvent.click(removeButtons[0]);

    await waitForElementToBeRemoved(() => {
      return getByText("Kaik");
    });

    await waitFor(() => {
      expect(queryByText("Kaik")).not.toBeInTheDocument();
    });
  });
});
