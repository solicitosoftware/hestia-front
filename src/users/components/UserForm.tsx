"use client";

import { useForm } from "react-hook-form";
import style from "../styles/UserForm.module.css";
import { Button } from "@/components/botton/Button";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiUsers } from "react-icons/fi";

const UserForm = () => {
  const [openModal, setOpenModal] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<any>();

  const onSubmit = (company: any) => {
    handleModal();
    reset();
  };

  const handleModal = () => {
    setOpenModal((state) => !state);
  };

  return (
    <div className={style.container}>
      <Button
        type="button"
        onClick={handleModal}
        styleColor="primary"
        name="Crear"
      >
        <FiUsers className="pr-2" size={25} />
      </Button>
      <form>
        <Modal size={"4xl"} dismissible show={openModal} onClose={handleModal}>
          <Modal.Header>Crear Usuario</Modal.Header>
          <Modal.Body>
            <div className={style.form}></div>
          </Modal.Body>
          <Modal.Footer>
            <div className={style.button}>
              <Button
                onClick={handleSubmit(onSubmit)}
                type="submit"
                styleColor="primary"
                name="Crear"
              />
              <Button
                type="button"
                onClick={handleModal}
                styleColor="clear"
                name="Cancelar"
              />
            </div>
          </Modal.Footer>
        </Modal>
      </form>
    </div>
  );
};

export default UserForm;
