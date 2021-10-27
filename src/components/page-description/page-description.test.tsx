import { render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom";
import PageDescription from "./page-description.component";


describe("<PageDescription />", () => {
	const data =  {
        title: "page title",
        subTitle: "page sub title"
    } 
	beforeEach(cleanup);

	test("should render title and subTitle", () => {
		const { getByText, getByAltText } = render(
			<PageDescription title={data.title} subTitle={data.subTitle} />
		);

		const title = getByText(data.title);
		const subTitle = getByText(data.subTitle);

		expect(title).toBeVisible();
		expect(subTitle).toBeVisible();

	});
});