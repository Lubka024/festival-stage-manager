import * as React from 'react'
import { Component, DateField, TextField } from '@contember/admin'

export const FestivalForm = Component(() => <>
	<TextField field="name" label="Name" />
	<DateField field="startDate" label="Start date" />
	<DateField field="endDate" label="End date" />
	<TextField field="venue" label="Venue" />
</>)
