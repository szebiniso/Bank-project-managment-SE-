import React, {ReactNode, Suspense} from "react";
import { BrowserRouter } from "react-router-dom";

const withRouter = (component: () => ReactNode) => () => (
    <BrowserRouter>
        <Suspense fallback="Loading...">
            {component()}
        </Suspense>
    </BrowserRouter>
);

export default withRouter