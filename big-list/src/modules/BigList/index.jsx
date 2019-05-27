import React from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { List, AutoSizer, WindowScroller } from "react-virtualized";

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const listCount = 5000;

const rowHeight = 50;

class BigList extends React.Component {
    list = Array(listCount).fill().map((val, idx) => ({
        id: idx,
        name: 'John Doe',
        image: 'http://via.placeholder.com/40',
        text: loremIpsum({
            count: 1,
            units: 'sentences',
            sentenceLowerBound: 4,
            sentenceUpperBound: 8
        })
    }));

    renderRow = ({ index, key, style }) => {
        const { classes } = this.props;
        return (
            <div key={key} style={style} className={classes.item}>
                <div className="image">
                    <img src={this.list[index].image} alt="" />
                </div>
                <div className="content">
                    <div>{this.list[index].name}</div>
                    <div>{this.list[index].text}</div>
                </div>
            </div>
        );
    };

    renderRow2 = ({ index, key, style }) => {
        const { classes } = this.props;
        return (
            <div key={key} style={style} className={classes.item}>
                <div className="image">
                    <img src={this.list[index].image} alt="" />
                </div>
                <div className="content">
                    <div>test</div>
                    <div>{this.list[index].text}</div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <div style={{ height: '100%' }}>
                <h1>list 1</h1>
                <WindowScroller>
                    {
                        ({ height, scrollTop, registerChild }) => (
                            <AutoSizer disableHeight>
                                {
                                    ({ width }) => (
                                        <div ref={el => registerChild(el)}>
                                            <List
                                                autoHeight
                                                width={width}
                                                height={height}
                                                rowHeight={rowHeight}
                                                rowRenderer={this.renderRow}
                                                rowCount={this.list.length}
                                                scrollTop={scrollTop} />
                                        </div>
                                    )
                                }
                            </AutoSizer>
                        )
                    }
                </WindowScroller>
                <h1>list 2</h1>
                <WindowScroller>
                    {
                        ({ height, scrollTop, registerChild }) => (
                            <AutoSizer disableHeight>
                                {
                                    ({ width }) => (
                                        <div ref={el => registerChild(el)}>
                                            <List
                                                autoHeight
                                                width={width}
                                                height={height}
                                                rowHeight={rowHeight}
                                                rowRenderer={this.renderRow2}
                                                rowCount={this.list.length}
                                                scrollTop={scrollTop} />
                                        </div>
                                    )
                                }
                            </AutoSizer>
                        )
                    }
                </WindowScroller>
            </div>
        );
    }
}

export default withStyles(styles)(BigList);