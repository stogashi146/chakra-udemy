import { memo, FC } from "react";
import { Box, Image, Wrap, Stack, Text, WrapItem } from "@chakra-ui/react";
import { UserCard } from "./organisms/user/UserCard";
import { useAllUsers } from "../hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl={"https://source.unsplash.com/random"}
          userName={"じゃけえ"}
          fullName={"Takumi Okada"}
        />
      </WrapItem>
    </Wrap>
  );
});
