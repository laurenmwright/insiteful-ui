import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal, FormElement, Input, Button } from "../components";
import { action } from "@storybook/addon-actions";

export default {
  title: "Stories/Components/Modal",
  component: Modal,
  argTypes: {
    onClose: { table: { disable: true } },
    isOpen: { table: { disable: true } },

  },
} as ComponentMeta<typeof Modal>;

export const Default = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };
  return (
    <div>
      <Button secondary primary onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={args.title} size={args.size}>
        <form onSubmit={handleSubmit}>
          <FormElement label="First Name">
            <Input type="text" onChange={() => {}}></Input>
          </FormElement>
          <FormElement label="Last Name">
            <Input type="text" onChange={() => {}}></Input>
          </FormElement>
          <FormElement label="Email">
            <Input type="text" onChange={() => {}}></Input>
          </FormElement>
          <Button primary type="submit">
            Submit
          </Button>
        </form>
      </Modal>
    </div>
  );
};

Default.args = {
  title: "Create New User",
  size: "medium",
  isOpen: true,
}
