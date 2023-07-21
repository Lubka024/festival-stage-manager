import * as React from 'react'
import { Box, DataGrid, DeleteEntityButton, DetailScope, DisplayTextField, GenericCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Performance detail
			</SlotSources.Title>
			<DetailScope entity="Performance(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/performance/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Performances
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/performance/edit(id: $entity.id)">
						Edit performance
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="startTime" label="Start time" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="endTime" label="End time" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="stage.name" label="Stage" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="festival.name" label="Festival" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Equipment
								</h2>
								<LinkButton to="admin/equipment/create">
									Create new equipment
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Equipment[performance.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/equipment/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="name" field="name" header="Name" />
							<NumberCell key="quantity" field="quantity" header="Quantity" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
