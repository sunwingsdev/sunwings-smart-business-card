import { useState } from "react";
import Card from "../../../components/dashboard/allCards/Card";
import CardModal from "../../../components/modals/CardModal";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AllCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="text_db_36 mb-3">All Cards Info</h1>
      <button onClick={openModal} className="U_btn">
        Add a Card
      </button>

      <Tabs className="my-5 flex flex-col items-center">
        <TabList className="border-b-0 flex flex-col md:flex-row items-center gap-4">
          <Tab className="border-0 p-3 text-lg font-semibold focus-within:bg-[#ffb700] md:focus-within:bg-[#ffb700] bg-none md:bg-[none] visited:bg-black focus-within:text-white cursor-pointer">
            Standard Card
          </Tab>
          <Tab className="border-0 p-3 text-lg font-semibold focus-within:bg-[#ffb700] md:focus-within:bg-[#ffb700] bg-none md:bg-none focus-within:text-white cursor-pointer">
            Office Card
          </Tab>
          <Tab className="border-0 p-3 text-lg font-semibold focus-within:bg-[#ffb700] md:focus-within:bg-[#ffb700] bg-none md:bg-none focus-within:text-white cursor-pointer">
            Premium Card
          </Tab>
        </TabList>

        <TabPanel>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <Card />
            <Card />
            <Card />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <Card />
            <Card />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </TabPanel>
      </Tabs>

      <CardModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default AllCards;
