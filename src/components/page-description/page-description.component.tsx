
import {PageDescriptionContainer, PageDescriptionWrapper, SubTitle, Title} from "./page-description.styles"

interface PageDescriptionProps {
  title: string;
  subTitle: string,
  categories?: string[]
}


 const PageDescription: React.FC<PageDescriptionProps> = ({
  title, subTitle
}: PageDescriptionProps) => {
  return (
    <PageDescriptionWrapper>
      <PageDescriptionContainer>
         <div>
           <Title> {title} </Title>
           <SubTitle>{subTitle}</SubTitle>
         </div>
         <div>

         </div>
        </PageDescriptionContainer>
    </PageDescriptionWrapper>
  );
};

export default PageDescription