import Codeblock from "@/components/Codeblock";
import Breadcrumb from "@/ds-components/Breadcrumb";

const BreadcrumbPage = () => {
  return (
    <>
      <p className="category-tag">Navigation</p>
      <h2>Breadcrumb</h2>
      <Breadcrumb />
      <Codeblock>
        {`
  <ol class="msc-breadcrumb-container">
    <li>
      <a class="msc-breadcrumb">breadcrumb</a>
      <span>/</span>
    </li>
    <li>
      <a class="msc-breadcrumb">breadcrumb</a>
      <span>/</span>
    </li>
    <li>
      <a class="msc-breadcrumb">breadcrumb</a>
      <span>/</span>
    </li>
  </ol>
          `}
      </Codeblock>
    </>
  );
};

export default BreadcrumbPage;
