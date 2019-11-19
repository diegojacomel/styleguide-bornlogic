// Modules
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

// Local Components
import GettingStarted from 'components/GettingStarted';
import ButtonDoc from 'components/ButtonDoc';
import ButtonCloseDoc from 'components/ButtonCloseDoc';
import ButtonIconDoc from 'components/ButtonIconDoc';
import CheckboxDoc from 'components/CheckboxDoc';
import ContainerDoc from 'components/ContainerDoc';
import CounterBallDoc from 'components/CounterBallDoc';
import EmptyContentDoc from 'components/EmptyContentDoc';
import FormControlDoc from 'components/FormControlDoc';
import ImageDoc from 'components/ImageDoc';
import InputDoc from 'components/InputDoc';
import LabelDoc from 'components/LabelDoc';
import LoadingDoc from 'components/LoadingDoc';
import ModalDoc from 'components/ModalDoc';
import PanelDoc from 'components/PanelDoc';
import ProgressBarDoc from 'components/ProgressBarDoc';
import RadioDoc from 'components/RadioDoc';
import SelectDoc from 'components/SelectDoc';
import TitleDoc from 'components/TitleDoc';
import ThemeDoc from 'components/ThemeDoc';

const MyRouter = () => {
    return (
        <Switch>
            <Route path="/" component={GettingStarted} exact />
            <Route path="/Button" component={ButtonDoc} exact />
            <Route path="/ButtonClose" component={ButtonCloseDoc} exact />
            <Route path="/ButtonIcon" component={ButtonIconDoc} exact />
            <Route path="/Checkbox" component={CheckboxDoc} exact />
            <Route path="/Container" component={ContainerDoc} exact />
            <Route path="/CounterBall" component={CounterBallDoc} exact />
            <Route path="/EmptyContent" component={EmptyContentDoc} exact />
            <Route path="/FormControl" component={FormControlDoc} exact />
            <Route path="/Image" component={ImageDoc} exact />
            <Route path="/Input" component={InputDoc} exact />
            <Route path="/Label" component={LabelDoc} exact />
            <Route path="/Loading" component={LoadingDoc} exact />
            <Route path="/Modal" component={ModalDoc} exact />
            <Route path="/Panel" component={PanelDoc} exact />
            <Route path="/ProgressBar" component={ProgressBarDoc} exact />
            <Route path="/Radio" component={RadioDoc} exact />
            <Route path="/Select" component={SelectDoc} exact />
            <Route path="/Title" component={TitleDoc} exact />
            <Route path="/Theme" component={ThemeDoc} exact />
        </Switch>
    )
}

export default withRouter(MyRouter);