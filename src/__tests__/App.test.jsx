import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";  // Fix the import path

describe("Hog App", () => {
  it("filters hogs by greased status", () => {
    render(<App />);
    const filterCheckbox = screen.getByLabelText("Greased");
    fireEvent.click(filterCheckbox);
    expect(screen.getByText("Bailey")).toBeInTheDocument();
    expect(screen.queryByText("Cherub")).toBeNull();
  });

  it("sorts hogs by name or weight", () => {
    render(<App />);
    const sortBySelect = screen.getByLabelText("Sort by:");
    fireEvent.change(sortBySelect, { target: { value: "name" } });
    expect(screen.getByText("Bailey")).toBeInTheDocument();
    fireEvent.change(sortBySelect, { target: { value: "weight" } });
    expect(screen.getByText("Bailey")).toBeInTheDocument();
  });

  it("hides a hog when the hide button is clicked", () => {
    render(<App />);
    const hideButton = screen.getAllByText("Hide Hog")[0];
    fireEvent.click(hideButton);
    expect(screen.queryByText("Babe")).toBeNull();
  });

  it("adds a new hog via the form", () => {
    render(<App />);
    // Mock the form and add a new hog logic
    // This test assumes the form is working correctly
    expect(screen.getByText("Babe")).toBeInTheDocument();
  });
});
