import * as React from 'react'
import { Component, NumberField, SelectField, TextField } from '@contember/admin'

export const EquipmentForm = Component(() => <>
	<TextField field="name" label="Name" />
	<NumberField field="quantity" label="Quantity" />
	<SelectField field="stage" label="Stage" options="Stage.name" lazy allowNull />
	<SelectField field="performance" label="Performance" options="Performance.name" lazy allowNull />
</>)
