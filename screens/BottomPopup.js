import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';

const deviceHeight = Dimensions.get('window').height;
export class BottomPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show = () => {
    this.setState({show: true});
  };
  close = () => {
    this.setState({show: false});
  };
  renderOutsideTouchable(onTouch) {
    const view = <View style={styles.container} />;
    if (!onTouch) {
      return view;
    }

    return (
      <TouchableWithoutFeedback onPress={onTouch} style={styles.container}>
        {view}
      </TouchableWithoutFeedback>
    );
  }

  renderTitle = () => {
    const {title} = this.props;
    return (
      <View style={styles.alignCenter}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  renderContent = () => {
    const {data} = this.props;
    return (
      <View>
        <FlatList
          style={styles.padding20}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this.renderItem}
          extraData={data}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          contentContainerStyle={styles.padding40}
        />
      </View>
    );
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.itemView}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );
  };

  renderSeparator = () => <View style={styles.separater} />;

  render() {
    let {show} = this.state;
    const {onTouchOutside} = this.props;

    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={show}
        onRequestClose={this.close}>
        <View style={styles.topModel}>
          {this.renderOutsideTouchable(onTouchOutside)}
          <View style={styles.model}>
            {this.renderTitle()}
            {this.renderContent()}
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  title: {
    color: '#182E44',
    fontSize: 25,
    fontWeight: '500',
    marginTop: 15,
    marginBottom: 30,
  },
  alignCenter: {
    alignItems: 'center',
  },
  model: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 10,
    maxHeight: deviceHeight * 0.4,
  },
  topModel: {
    flex: 1,
    backgroundColor: '#000000AA',
    justifyContent: 'flex-end',
  },
  separater: {
    opacity: 0.1,
    backgroundColor: '#182E44',
    height: 1,
  },
  itemView: {
    height: 50,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  itemText: {fontSize: 18, fontWeight: 'normal', color: '#182E44'},
  padding20: {paddingBottom: 20},
  padding40: {paddingBottom: 40},
});
