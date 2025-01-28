import { useState } from "react";

import { Container, Content, Title, Subtitle, ContactLink } from "./styles";

import { InputComponent  } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api";
import { AxiosError } from "axios";

import { IceCream } from "@phosphor-icons/react";
import { useTheme } from "styled-components";


export function DeleteUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { COLORS } = useTheme();

  function handleDeleteAlert() {
    const userConfirmed = window.confirm("Você tem certeza que deseja deletar o usuário?");
    if (userConfirmed) {
      handleDeleteUser();
    }
  }
  async function handleDeleteUser() {
    try {
      const response = await api.delete('/user', {
        data: {
          email,
          password
        }
      });
      window.alert(response.data.message);
      console.log(response.data);
    } catch (error: AxiosError | any) {
      console.error(error);
      window.alert(error.response.data.message);
    }
  }
  return (
    <Container>
      <Content>

      <IceCream size={100} color={COLORS.BRAND_LIGHT} />

      <Title>Casquinha do dão</Title>
      <Title>Deletar Usuário</Title>
        
        <InputComponent 
          label="Email"
          changeText={(e) => { setEmail(e.target.value) }}
          type="email"
          
        />

        <InputComponent 
          label="Senha"
          changeText={(e) => {setPassword(e.target.value)}}
          type="password"
          
        />

        <Button title="Deletar" 
          click={() => {
            handleDeleteAlert();
          }}
        />

        <Subtitle>
          Desenvolvido por <ContactLink href="italovinicius2018@gmail.com"> Ítalo Vinícius de Bessa</ContactLink>
        </Subtitle>

      </Content>
    </Container>
  );
}