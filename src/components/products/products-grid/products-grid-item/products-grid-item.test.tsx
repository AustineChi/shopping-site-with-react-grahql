import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductGridItem from "./product-grid-item.component";

describe("<ProductGridItem />", () => {
  const data = {
    id: 43,
    title: "Anti-Fatigue Eye Patch",
    image_url: "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/eye-patch.png",
    price: 20,
  };

  const mockHandleSidebar = jest.fn();

  beforeEach(cleanup);

  test("should render product title and image_url ", () => {
    const { getByText, getByAltText} = render(
      <ProductGridItem product={data} handleSidebar={mockHandleSidebar} />
    );

    const title = getByText(data.title);
    const image_url = getByAltText(data.title);

    expect(title).toBeVisible();
    expect(image_url).toBeVisible();
  });
});
