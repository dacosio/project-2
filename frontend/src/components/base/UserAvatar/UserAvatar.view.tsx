import React from "react";
import { UserAvatarProps } from "./UserAvatar.props";
import { Container } from "./UserAvatar.style";
import Avatar from "react-avatar";
import { useTheme } from "../../../utils/Theme";

const UserAvatar = (props: UserAvatarProps): JSX.Element => {
  const {
    email,
    displayName,
    size,
    imageUrl,
    round = true,
    onClick,
    ...rest
  } = props;
  const theme = useTheme();
  return (
    <Container>
      <Avatar
        color={theme.neutral.n80}
        email={email}
        name={displayName}
        size={size}
        src={imageUrl}
        round={round}
        onClick={onClick}
        {...rest}
      />
    </Container>
  );
};

export default React.memo(UserAvatar);
