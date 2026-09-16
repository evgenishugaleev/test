import { render } from "@testing-library/react";
import { MainPage } from "./MainPage";

const renderComponent = () => {
    return render(<MainPage />)
}

describe("Тест компонента MainPage", () => {
    test("Snapshot-тест корректного рендеринга", () => {
        const component = renderComponent();

        expect(component).toMatchSnapshot();
    })
})