import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Page } from './Product';
import RaisedButton from 'material-ui/RaisedButton';
import { previousPage, nextPage } from '../actions/pageActions';
import { PDFExport } from '@progress/kendo-react-pdf';
import '../styles/Preview.css';

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isExport: false,
        });

        this.exportPDF = this.exportPDF.bind(this);
    }

    exportableContent;

    exportPDF() {        
        this.setState({
            isExport: true,
        },
            this.exportableContent.save()
        );
        setTimeout(() => {
            this.setState({
                isExport: false,
            });
        }, 1000);
    }

    render() {
        const previewPages = this.props.pages.map((page, index) => {
            return (
                <div className="preview-container-page" key={index}>
                    {!this.state.isExport && <div className="preview-container-page-mask"></div>}
                    <Page
                        key={index}
                        value={this.props.pages[index]}
                        isPreview={this.props.isPreview}
                    />
                    <div className="page-break"></div>
                </div>
            );
        });


        return (
            <div className="preview">
                <div className="export-PDF-button">
                    <RaisedButton type="button" labelColor="#999" label="Export" onClick={this.exportPDF} />
                </div>
                <PDFExport
                    ref={(component) => this.exportableContent = component}
                    paperSize={["8.75in", "5.75in"]}
                    forcePageBreak="page-break"
                >
                    <div className='preview-container'>
                        {previewPages}
                    </div>
                </PDFExport>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    isPreview: state.preview.isPreview,
    current: state.pages.current,
    pages: state.pages.pages,

});

export default connect(mapStateToProps, { previousPage, nextPage })(Preview);