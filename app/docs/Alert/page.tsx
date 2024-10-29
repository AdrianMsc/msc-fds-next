import Codeblock from "@/components/Codeblock";
import MscAlert from "@/ds-components/MscAlert";

const MscAlertPage = () => {
  return (
    <>
      <p className="category-tag">Indicator</p>
      <h2>Alert</h2>
      <MscAlert />
      <Codeblock>
        {`
  <div class="msc-alert msc-alert-info w-full">
    <div class="msc-alert-main-container">
      <div class="msc-alert-content">
        <i class="msc-alert-icon msc-alert-info-icon fas fa-circle-exclamation"></i>
            This is an alert message
      </div>
      <div class="msc-alert-cta-container pb-0">
        <!-- button component -->
        <button class="msc-btn msc-btn-blue-outline msc-btn-sm">
          <span>Action 2</span>
        </button>
        <!-- button component -->
        <button class="msc-btn msc-btn-blue-solid msc-btn-sm">
          <span>Action 1</span>
        </button>
      </div>
    </div>
  </div>
  `}
      </Codeblock>
    </>
  );
};

export default MscAlertPage;
