import React from 'react'
import { Eventcalendar, Select, snackbar, setOptions, Popup, Button, Input, Textarea, Switch, Datepicker } from '@mobiscroll/react';
import {PostEntry} from '../API services (fetch functions)/entriesServices';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

// const now = new Date();
const defaultEvents = [{
    id: 1,
    start: '',
    end: '',
    title: 'Spilled Coffee',
    description: '',
    tags: ["joy","sad"]
}];

const responsivePopup = {
    medium: {
        display: 'anchored',
        width: 400,
        fullScreen: false,
        touchUi: false
    }
};

const Journal = () => {
    const [myEvents, setMyEvents] = React.useState(defaultEvents);
    const [tempEvent, setTempEvent] = React.useState(null);
    const [isOpen, setOpen] = React.useState(false);
    const [isEdit, setEdit] = React.useState(false);
    const [anchor, setAnchor] = React.useState(null);
    const [start, startRef] = React.useState(null);
    const [end, endRef] = React.useState(null);
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [popupEventAllDay, setAllDay] = React.useState(true);
    const [popupEventDate, setDate] = React.useState([]);
    // const [mySelectedDate, setSelectedDate] = React.useState(now);
    const [emotion,setEmotion] = React.useState([])


    const selectedChange = (ev) => {setEmotion(ev.value)}
    const bonuses = ['joy', 'sad', 'anger','happy']
    // const [newEntries, setNewEntries] = React.useState()
    const saveEvent = React.useCallback(() => {
        const newEvent = {
            id: tempEvent.id,
            title: title,
            description: description,
            // start: popupEventDate[0],
            start: '',
            end: '',
            tags: emotion,
            allDay: popupEventAllDay
        };
        if (isEdit) {
            // update the event in the list
            const index = myEvents.findIndex(x => x.id === tempEvent.id);;
            const newEventList = [...myEvents];

            newEventList.splice(index, 1, newEvent);
            setMyEvents(newEventList);
            // here you can update the event in your storage as well
            // ...
        } else {
            // add the new event to the list
            setMyEvents([...myEvents, newEvent]);
            // here you can add the event to your storage as well
            // ...
        }
        // setSelectedDate(new Date());
        // close the popup
        setOpen(false);
    }, [isEdit, myEvents, popupEventAllDay, description, title, tempEvent, emotion]);

    const deleteEvent = React.useCallback((event) => {
        setMyEvents(myEvents.filter(item => item.id !== event.id));
        setTimeout(() => {
            snackbar({
                button: {
                    action: () => {
                        setMyEvents(prevEvents => [...prevEvents, event]);
                    },
                    text: 'Undo'
                },
                message: 'Event deleted'
            });
        });
    }, [myEvents]);

    const loadPopupForm = React.useCallback((event) => {
        setTitle(event.title);
        setDescription(event.description);
        // setDate([event.start, event.end]);
        setAllDay(event.allDay || false);
        
    }, []);

    // handle popup form changes

    const titleChange = React.useCallback((ev) => {
        setTitle(ev.target.value);
    }, []);

    const descriptionChange = React.useCallback((ev) => {
        setDescription(ev.target.value);
    }, []);

    const allDayChange = React.useCallback((ev) => {
        setAllDay(ev.target.checked);
    }, []);

    const dateChange = React.useCallback((args) => {
        setDate(args.value);
    }, []);

    const onDeleteClick = React.useCallback(() => {
        deleteEvent(tempEvent);
        setOpen(false);
    }, [deleteEvent, tempEvent]);

    // scheduler options

    // const onSelectedDateChange = React.useCallback((event) => {
    //     setSelectedDate(event.date);
    // });

    const onEventClick = React.useCallback((args) => {
        setEdit(true);
        setTempEvent({ ...args.event });
        // fill popup form with event data
        loadPopupForm(args.event);
        setAnchor(args.domEvent.target);
        setOpen(true);
    }, [loadPopupForm]);

    const onEventCreated = React.useCallback((args) => {
        // createNewEvent(args.event, args.target)
        setEdit(false);
        setTempEvent(args.event)
        // fill popup form with event data
        loadPopupForm(args.event);
        setAnchor(args.target);
        // open the popup
        setOpen(true);
    }, [loadPopupForm]);

    const onEventDeleted = React.useCallback((args) => {
        deleteEvent(args.event)
    }, [deleteEvent]);

    const onEventUpdated = React.useCallback((args) => {
        // here you can update the event in your storage as well, after drag & drop or resize
        // ...
    }, []);

    // datepicker options
    const controls = React.useMemo(() => popupEventAllDay ? ['date'] : ['datetime'], [popupEventAllDay]);
    const respSetting = React.useMemo(() => popupEventAllDay ? {
        medium: {
            controls: ['calendar'],
            touchUi: false
        }
    } : {
            medium: {
                controls: ['calendar', 'time'],
                touchUi: false
            }
        }, [popupEventAllDay]);

    // popup options
    const headerText = React.useMemo(() => isEdit ? 'Edit event' : 'New Event', [isEdit]);
    const popupButtons = React.useMemo(() => {
        if (isEdit) {
            return [
                'cancel',
                {
                    handler: () => {
                        saveEvent();
                    },
                    keyCode: 'enter',
                    text: 'Save',
                    cssClass: 'mbsc-popup-button-primary'
                }
            ];
        }
        else {
            return [
                'cancel',
                {
                    handler: () => {
                        
                        // saveEvent();
                        PostEntry(title, description, emotion)
                    },
                    keyCode: 'enter',
                    text: 'Add',
                    cssClass: 'mbsc-popup-button-primary'
                }
            ];
        }
    }, [isEdit, saveEvent]);

    const onClose = React.useCallback(() => {
        if (!isEdit) {
            // refresh the list, if add popup was canceled, to remove the temporary event
            setMyEvents([...myEvents]);
        }
        setOpen(false);
    }, [isEdit, myEvents]);


    const view = React.useMemo(() => {
              return {
                  calendar: { type: 'week' , labels: true},
                  agenda: { type: 'day' }
              };
          }, []);
    
          const renderEventCalendar = React.useCallback((data) => {
            return <React.Fragment>
                <div>{data.title}</div>
                <div>
                    <Select selectMultiple={true} value={emotion} onChange={selectedChange} data={bonuses}>Emotions</Select>
                </div>
                
            </React.Fragment>
        })

        console.log(emotion)
        console.log(myEvents)

    return <div>
        <h3>My mood Journal</h3>
        <Eventcalendar
            renderEventContent={renderEventCalendar}
            view={view}
            data={myEvents}
            clickToCreate="double"
            dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            // selectedDate={mySelectedDate}
            // onSelectedDateChange={onSelectedDateChange}
            onEventClick={onEventClick}
            onEventCreated={onEventCreated}
            onEventDeleted={onEventDeleted}
            onEventUpdated={onEventUpdated}
        />
        <Popup
            display="bottom"
            fullScreen={true}
            contentPadding={false}
            headerText={headerText}
            anchor={anchor}
            buttons={popupButtons}
            isOpen={isOpen}
            onClose={onClose}
            responsive={responsivePopup}
        >
            <div className="mbsc-form-group">
                <Input label="Title" value={title} onChange={titleChange} />
                <Textarea label="Description" value={description} onChange={descriptionChange} />
            </div>
            <div className="mbsc-form-group">
                <Switch label="All-day" checked={popupEventAllDay} onChange={allDayChange} />
                {/* <Input ref={startRef} label="Starts" /> */}
                {/* <Input ref={endRef} label="Ends" /> */}
                <Datepicker
                    select="range"
                    controls={controls}
                    touchUi={true}
                    // startInput={start}
                    // endInput={end}
                    showRangeLabels={false}
                    responsive={respSetting}
                    onChange={dateChange}
                    // value={new Date()}
                />
                <Select selectMultiple={true} value={emotion} onChange={selectedChange} data={bonuses}>Emotions</Select>
                {isEdit ? <div className="mbsc-button-group"><Button className="mbsc-button-block" color="danger" variant="outline" onClick={onDeleteClick}>Delete event</Button></div> : null}
            </div>
        </Popup>
    </div>

}

export default Journal