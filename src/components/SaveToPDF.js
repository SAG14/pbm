import React, { Component } from 'react';
import { Page } from './Product';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PDFExport } from '@progress/kendo-react-pdf';
import { Redirect } from 'react-router';
import { toHomePage } from '../actions/appNavigationActions';

class SaveToPDF extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '',
        };
    }

    // variable must be like this and not using setState method
    exportableContent;

    componentDidMount() {
        this.exportableContent.save();
        this.props.toHomePage();
    }

    render() {
        return (
            <div>
            <PDFExport
                ref={(component) => this.exportableContent = component}
            >
                { this.props.pages.map((page, index) =>
                <div key={index}>
                    <Page
                        value={this.props.pages[index]}
                    />
                    <div className="page-break">
                    </div>
                </div>
                )}
            </PDFExport>
            </div>
        );
    }
}

SaveToPDF.propTypes = {
    pages: PropTypes.array,
    toHomePage: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    pages: state.pages.pages,
});

export default connect(mapStateToProps, { toHomePage })(SaveToPDF);
