import React, { PureComponent } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/typography";
import { getApod } from "../store/actions/Apod";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { NASAStore } from "../typings";
import AsteroidCard from "../components/ApodCard";
import DatePicker from "../components/DatePicker";
interface IAPODProps {
  getApod: (params: NASAStore.getAPODRequest) => void;
  Apod: NASAStore.IAPODReducers;
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
  onChange = (date: Date) => {
    this.props.getApod({
      date: date.toISOString().split("T")[0],
      hd: true,
    });
  };

  render() {
    const { loading, pictureData } = this.props.Apod;
    return loading ? (
      <div>Loading</div>
    ) : (
      pictureData && (
        <div style={this.pictureCSS(pictureData?.hdurl)}>
          <AsteroidCard pictureData={pictureData} />
          <br />
          <DatePicker onChange={this.onChange} value={this.Date} />
        </div>
      )
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
