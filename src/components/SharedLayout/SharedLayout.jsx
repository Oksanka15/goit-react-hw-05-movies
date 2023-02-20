import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navigation} from 'components/Navigation/Navigation'
import { Container, Header} from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
      <Container>
        <Header>
          <Navigation />
        </Header>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    );
  };
  