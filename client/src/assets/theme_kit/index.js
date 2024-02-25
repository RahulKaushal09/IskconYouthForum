/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from "@mui/material/styles";

// Material Dashboard 2 React base styles
import colors from "../../kitAssests/theme/base/colors"
import breakpoints from "../../kitAssests/theme/base/breakpoints";
import typography from "../../kitAssests/theme/base/typography";
import boxShadows from "../../kitAssests/theme/base/boxShadows";
import borders from "../../kitAssests/theme/base/borders";
import globals from "../../kitAssests/theme/base/globals";

// Material Dashboard 2 React helper functions
import boxShadow from "../../kitAssests/theme/functions/boxShadow";
import hexToRgb from "../../kitAssests/theme/functions/hexToRgb";
import linearGradient from "../../kitAssests/theme/functions/linearGradient";
import pxToRem from "../../kitAssests/theme/functions/pxToRem";
import rgba from "../../kitAssests/theme/functions/rgba";

// Material Dashboard 2 React components base styles for @mui material components
import sidenav from "../../kitAssests/theme/components/sidenav";
import list from "../../kitAssests/theme/components/list";
import listItem from "../../kitAssests/theme/components/list/listItem";
import listItemText from "../../kitAssests/theme/components/list/listItemText";
import card from "../../kitAssests/theme/components/card";
import cardMedia from "../../kitAssests/theme/components/card/cardMedia";
import cardContent from "../../kitAssests/theme/components/card/cardContent";
import button from "../../kitAssests/theme/components/button";
import iconButton from "../../kitAssests/theme/components/iconButton";
import input from "../../kitAssests/theme/components/form/input";
import inputLabel from "../../kitAssests/theme/components/form/inputLabel";
import inputOutlined from "../../kitAssests/theme/components/form/inputOutlined";
import textField from "../../kitAssests/theme/components/form/textField";
import menu from "../../kitAssests/theme/components/menu";
import menuItem from "../../kitAssests/theme/components/menu/menuItem";
import switchButton from "../../kitAssests/theme/components/form/switchButton";
import divider from "../../kitAssests/theme/components/divider";
import tableContainer from "../../kitAssests/theme/components/table/tableContainer";
import tableHead from "../../kitAssests/theme/components/table/tableHead";
import tableCell from "../../kitAssests/theme/components/table/tableCell";
import linearProgress from "../../kitAssests/theme/components/linearProgress";
import breadcrumbs from "../../kitAssests/theme/components/breadcrumbs";
import slider from "../../kitAssests/theme/components/slider";
import avatar from "../../kitAssests/theme/components/avatar";
import tooltip from "../../kitAssests/theme/components/tooltip";
import appBar from "../../kitAssests/theme/components/appBar";
import tabs from "../../kitAssests/theme/components/tabs";
import tab from "../../kitAssests/theme/components/tabs/tab";
import stepper from "../../kitAssests/theme/components/stepper";
import step from "../../kitAssests/theme/components/stepper/step";
import stepConnector from "../../kitAssests/theme/components/stepper/stepConnector";
import stepLabel from "../../kitAssests/theme/components/stepper/stepLabel";
import stepIcon from "../../kitAssests/theme/components/stepper/stepIcon";
import select from "../../kitAssests/theme/components/form/select";
import formControlLabel from "../../kitAssests/theme/components/form/formControlLabel";
import formLabel from "../../kitAssests/theme/components/form/formLabel";
import checkbox from "../../kitAssests/theme/components/form/checkbox";
import radio from "../../kitAssests/theme/components/form/radio";
import autocomplete from "../../kitAssests/theme/components/form/autocomplete";
import container from "../../kitAssests/theme/components/container";
import popover from "../../kitAssests/theme/components/popover";
import buttonBase from "../../kitAssests/theme/components/buttonBase";
import icon from "../../kitAssests/theme/components/icon";
import svgIcon from "../../kitAssests/theme/components/svgIcon";
import link from "../../kitAssests/theme/components/link";
import dialog from "../../kitAssests/theme/components/dialog";
import dialogTitle from "../../kitAssests/theme/components/dialog/dialogTitle";
import dialogContent from "../../kitAssests/theme/components/dialog/dialogContent";
import dialogContentText from "../../kitAssests/theme/components/dialog/dialogContentText";
import dialogActions from "../../kitAssests/theme/components/dialog/dialogActions";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
});
