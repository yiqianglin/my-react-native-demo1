/**
 * Created by yuanguozheng on 16/1/22.
 */
'use strict';
import React, {
    Component,
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    RefreshControl
} from 'react-native';

// import Banner from './Banner';

const BANNER_IMGS = [
    require('../images/banner/1.jpg'),
    require('../images/banner/2.jpg'),
    require('../images/banner/3.jpg'),
    require('../images/banner/4.jpg')
];

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: null
        }
    }

    render() {
        return (
            <View style={styles.page}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
    },
});