import * as React from 'react'
import { Component, DateTimeField, SelectField, TextField } from '@contember/admin'

export const PerformanceForm = Component(() => <>
	<TextField field="name" label="Name" />
	<DateTimeField field="startTime" label="Start time" />
	<DateTimeField field="endTime" label="End time" />
	<SelectField field="stage" label="Stage" options="Stage.name" lazy allowNull />
	<SelectField field="festival" label="Festival" options="Festival.name" lazy allowNull />
</>)
