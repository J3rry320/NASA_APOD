import React, { PureComponent } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/typography";
import { getApod } from "../store/actions/Apod";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { NASAStore } from "../typings";
import AsteroidCard from "../components/ApodCard";
import DatePicker from "../components/DatePicker";
import { Grid } from "@material-ui/core";
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
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.props.getApod({
      date: this.processDate(this.state.date),
      hd: true,
    });
  }
  processDate = (inputDate: Date) => inputDate.toISOString().split("T")[0];
  onChange = (inputDate: Date) => {
    const { date } = this.state;
    this.setState({
      date: inputDate,
    });
    this.props.getApod({
      date: this.processDate(date),
      hd: true,
    });
  };

  render() {
    const { loading, pictureData } = this.props.Apod;
    const { date } = this.state;
    return loading ? (
      <div>Loading</div>
    ) : (
      pictureData && (
        <div style={this.pictureCSS(pictureData?.hdurl)}>
          <Grid container spacing={3}>
            <Grid item>
              <AsteroidCard pictureData={pictureData} />
            </Grid>
            <Grid item>
              <DatePicker onChange={this.onChange} value={date} />
            </Grid>
          </Grid>
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
