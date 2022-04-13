class MenuItem extends React.Component {
    render() {
        return element(
            'li', null, element(
                    'a', {href: "#"}, this.props.link_name
                )
        );
    }
}


