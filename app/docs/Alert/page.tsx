import MscTabs from "@/components/MscTabs";
import React from "react";

const MscAlertPage = () => {
  const variants = ["Info", "Success", "Warning", "Error"];

  return (
    <div>
      <h1 className="font-bold text-3xl mb-3">
        <small className="text-sm text-primary-blue">Alerts</small> <br />
        Alerts
      </h1>

      <MscTabs labels={variants} />

      <h2 className="mb-4">CTA Alert</h2>
      <div className="flex gap-2 items-center bg-white p-5 w-full rounded">
        <div
          id="warning-example-id"
          className="msc-alert msc-alert-info w-full"
        >
          <div className="msc-alert-main-container">
            <div className="msc-alert-content">
              <i className="msc-alert-icon msc-alert-info-icon fas fa-circle-exclamation"></i>
              This is an alert message
            </div>
            <div className="msc-alert-cta-container pb-0">
              <button className="msc-btn msc-btn-blue-outline msc-btn-sm">
                <span>Action 2</span>
              </button>
              <button className="msc-btn msc-btn-blue-solid msc-btn-sm">
                <span>Action 1</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2>Without CTA Alert</h2>
      <div className="flex gap-2 items-center bg-white p-5 w-full rounded">
        <div
          id="warning-example-id"
          className="msc-alert msc-alert-info w-full"
        >
          <div className="msc-alert-main-container">
            <div className="msc-alert-content">
              <i className="msc-alert-icon msc-alert-info-icon fas fa-circle-exclamation"></i>
              This is an error message
            </div>
          </div>
        </div>
      </div>
      <h2>Alert Global</h2>
      <div className="flex gap-2 items-center bg-white p-5 w-full rounded">
        <div
          id="warning-example-id"
          className="msc-alert msc-alert-info w-full"
        >
          <div className="msc-alert-main-container">
            <div className="msc-alert-content">
              <i className="msc-alert-icon msc-alert-info-icon fas fa-circle-info"></i>
              <div>
                <p className="msc-alert-title">Example Title</p>
                <p className="msc-alert-description">Example Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Without Alert list</h2>
      <div className="flex gap-2 items-center bg-white p-5 w-full rounded">
        <div
          id="warning-example-id"
          className="msc-alert msc-alert-info w-full"
        >
          <div className="msc-alert-main-container">
            <div className="msc-alert-content">
              <i className="msc-alert-icon msc-alert-info-icon fas fa-circle-info"></i>
              <div>
                <p className="msc-alert-title">Example Title</p>
                <p className="msc-alert-description">Example Description</p>
              </div>
            </div>
            <div className="msc-alert-cta-container">
              <button className="msc-btn msc-btn-blue-outline msc-btn-sm">
                <span>Cancel</span>
              </button>
              <button className="msc-btn msc-btn-blue-solid msc-btn-sm">
                <span>Agree</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2>With Alert list</h2>
      <div className="flex gap-2 items-center bg-white p-5 w-full rounded">
        <div
          id="warning-example-id"
          className="msc-alert msc-alert-info w-full"
        >
          <div className="msc-alert-main-container">
            <div className="msc-alert-content">
              <i className="msc-alert-icon msc-alert-info-icon fas fa-circle-info"></i>
              <div>
                <p className="msc-alert-title">Example Title</p>
                <p className="msc-alert-description">Example Description</p>
              </div>
            </div>
            <div className="msc-alert-cta-container">
              <button className="msc-btn msc-btn-blue-outline msc-btn-sm">
                <span>Cancel</span>
              </button>
              <button className="msc-btn msc-btn-blue-solid msc-btn-sm">
                <span>Agree</span>
              </button>
            </div>
          </div>
          <div className="msc-alert-list-container group">
            <button
              type="button"
              title="Alerts Information"
              className="msc-alert-list-toggle"
            >
              <span className="msc-alert-list-toggle-show">Show</span>
              <span className="msc-alert-list-toggle-hide">Hide</span> Alerts
              <i className="msc-alert-list-toggle-icon fas fa-chevron-down fa-sm"></i>
            </button>
            <ul className="msc-alert-list">
              <li className="msc-alert-list-item">
                <a>Example list item</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MscAlertPage;
