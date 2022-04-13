class Movie extends React.Component {
    render() {
        return element(
            'div', {className: "movies__item"}, element(
                'div', {className: "movies__item_pic"}, element(
                    'img', {src: this.props.imgsrc}, null
                    )
                ),
                element('div', {className: "movies__item_text"}, this.props.name),
                element('div', {className: "movies__item_text"}, element(
                    'span', null, 'Год: '
                    ), 
                    this.props.year)
        );
    }
}