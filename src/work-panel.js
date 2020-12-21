import React, { Component } from 'react';
import './work-panel.css';
import { getImage } from './api';

export default class WorkPanel extends Component {

    state = {
        image: {},
        loading: false
    }

    getTag = event => {
        this.props.setTag(event.target.value)
        this.props.setNotification(null)
    }

    createImageItem = event => {
        event.preventDefault()
        this.setState({ loading: true })
        const { tag } = this.props;
        tag ? 
        getImage(tag).then(data => {
            if (Object.keys(data).length) {
            this.setState({
                image: {
                    id: data.id,
                    tag: tag,
                    image: data.embed_url,
                    date: new Date()
                },
                loading: false
            })
            this.props.setState([...this.props.images, this.state.image])}
            else this.onError(`По тегу '${tag}' ничего не найдено`)
        })
        .catch(error => {
            error = error.toString().replace(/Error:/, '')
            this.onError(`Произошла http ошибка: '${error}'`)
        })
        : this.onError('Заполните поле \'тег\'')
    }

    onClear = () => {
        this.props.setState([])
        this.props.setNotification(null)
        this.props.setTag('')
    }

    onGroup = () => {
        this.props.setGroup(group => !group)
    }

    onError = notification => {
        this.props.setNotification(notification)
        this.setState({ loading: false })
    }

    render() {
        const { loading } = this.state;
        const { group, tag, images } = this.props;
        return (
            <div onSubmit={this.createImageItem} className='work-panel'>
                <form className='form-inline'>
                    <input className='form-control'
                           placeholder='введите тег'
                           onChange={this.getTag}
                           value={tag}/>
                    {loading ? <button disabled className='btn btn-load mx-sm-2'>Загрузка...</button> : 
                    <button type='submit' className='btn btn-load mx-sm-2'>Загрузить</button>}
                    <button type='reset' className='btn btn-clear' onClick={this.onClear}>Очистить</button>
                    <button disabled={images.length ? false : true} type='button' className='btn btn-group mx-sm-2' onClick={this.onGroup}>
                        {group ? 'Разгруппировать': 'Группировать'}
                    </button>
                </form>
            </div>
        )
    }
}