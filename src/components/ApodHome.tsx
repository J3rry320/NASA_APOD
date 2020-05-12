import React, { PureComponent } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/typography";
import { getApod } from "../store/actions/Apod";
import { Dispatch } from "redux";
import { connect } from "react-redux";
interface IAPODProps {
  getApod: (params: NASAStore.getAPODRequest) => void;
}
class AsteroidPicture extends PureComponent<IAPODProps> {
  private pictureCSS = (image: string) => ({
    background: ` url(${image}) center center/cover  no-repeat #000`,
    height: "101vh",
    width: "100vw",
    margin: "-8px",
  });
  private Date = new Date();
  getTodaysDate = () =>
    `${this.Date.getFullYear()}-${this.Date.getMonth()}-${this.Date.getDay()}`;
  componentDidMount() {
    this.props.getApod({
      date: this.getTodaysDate(),
      hd: true,
    });
  }
  render() {
    return (
      <div
        style={this.pictureCSS(
          "https://apod.nasa.gov/apod/image/1909/HarvestmoonGraffand.jpg"
        )}
      >
        <Typography align="left" variant="h1" className="text">
          This is sample
        </Typography>
      </div>
    );
  }
}
const mapStateToProps = ({ Apod }: NASAStore.IRootReducers) => ({
  Apod,
});
const mapDispathProps = (dispatch: Dispatch) => ({
  getApod: (params: NASAStore.getAPODRequest) => dispatch(getApod(params)),
});
export default connect(mapStateToProps, mapDispathProps)(AsteroidPicture);
